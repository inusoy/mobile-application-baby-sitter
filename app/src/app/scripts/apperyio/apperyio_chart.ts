import { Chart } from 'chart.js';
import _ from "lodash";

if(Chart) {
  const drawController = {
    "draw": function() {
      const meta = this.getMeta(),
        elements = meta.data || [];
    
      if (meta.dataset) {
        meta.dataset.draw();
      }

      elements.forEach(element => {
        const vm = element._view;
        if(vm) {
          vm.innerRadius = vm.innerRadius < 0 ? 0 : vm.innerRadius;
          vm.outerRadius = vm.outerRadius < 0 ? 0 : vm.outerRadius;
        }

        element.draw();
      });
    }
  };
  

  Chart.controllers.polarArea = Chart.controllers.polarArea.extend(drawController);
  Chart.controllers.pie = Chart.controllers.pie.extend(drawController);
  Chart.controllers.doughnut = Chart.controllers.doughnut.extend(drawController);
}

function generateColors(dataLength=0, alpha=0.8) {
  let iterationCount = Math.trunc(dataLength/12) || 1,
      stepCount = Math.trunc(127/iterationCount),
      stepToDown = Math.trunc(255/iterationCount),
      colorArray = [],
      colorStringGenerator = (r, g, b, alpha) => {
          return `rgba(${r} ,${g} ,${b} ,${alpha})`;
      };
      let j = 0,
        color,
        loopLevel=0,
        stepToLeft = 0,
        stepDownValue = 0;
      for (let i = 0; i < dataLength; i++) {
          if (j > 11) {
            j = 0;
            loopLevel++;
            stepToLeft = loopLevel*stepCount;
            stepDownValue = loopLevel*stepToDown;
          }
          switch (j) {
            case 0:
                color = colorStringGenerator(255, 0 + stepToLeft , 0 + stepDownValue, alpha);
                break;
            case 1:
                color = colorStringGenerator(255, 128 + stepToLeft , 0 + stepDownValue, alpha);
                break;
            case 2:
                color = colorStringGenerator(255 - stepToLeft , 255, 0 + stepDownValue, alpha);
                break;
            case 3:
                color = colorStringGenerator(128 - stepToLeft , 255 , 0 + stepDownValue, alpha);
                break;
            case 4:
                color = colorStringGenerator(0 + stepDownValue, 255, 0 + stepToLeft , alpha);
                break;
            case 5:
                color = colorStringGenerator(0 + stepDownValue, 255, 128 + stepToLeft , alpha);
                break;
            case 6:
                color = colorStringGenerator(0 + stepDownValue, 255 - stepToLeft , 255, alpha);
                break;
            case 7:
                color = colorStringGenerator(0 + stepDownValue, 128 - stepToLeft , 255, alpha);
                break;
            case 8:
                color = colorStringGenerator(0 + stepToLeft , 0 + stepDownValue, 255, alpha);
                break;
            case 9:
                color = colorStringGenerator(128 + stepToLeft , 0 + stepDownValue, 255, alpha);
                break;
            case 10:
                color = colorStringGenerator(255, 0 + stepDownValue, 255 - stepToLeft , alpha);
                break;
            case 11:
                color = colorStringGenerator(255, 0 + stepDownValue, 128 - stepToLeft , alpha);
                break;
          }
          colorArray.push(color);            
          j++;
      }

  return colorArray;
}

function generateDefaultLabels(dataLength = 0) {
  let newLabels = [];

  for (let i = 0; i < dataLength; ++i) {
    newLabels.push(i + '');
  }

  return newLabels;
}

export class ApperyioChart {
  private aioChartObject: aioChartInit = {};
  private isChartInit: boolean = false;

  constructor(aioChartElementId: string, aioChartElement: any, aioInitChartObject: aioInitChartObject, isAutoInit: boolean = true) {
    this.saveChartInitObject(aioInitChartObject, aioChartElementId, aioChartElement);
    if (isAutoInit) {
        this.init();
    }
  }

  private legendOnClick (e, legendItem) {
    const chart = this["chart"];

    if (chart) {
      let index = legendItem.index, i, ilen, meta;

      for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
        meta = chart.getDatasetMeta(i);
        // toggle visibility of index if exists
        if (meta && meta.data && Array.isArray(meta.data) && meta.data.length && meta.data[index]) {
          meta.data[index].hidden = !meta.data[index].hidden;
        }
      }

      chart.update();
    }
  }

  private generateLabels (chart) {
    const data = chart.data,
      labels = data.labels || [],
      datasets = data.datasets || [];

    if (labels.length && datasets.length) {
      let index = 0,
        length = 0,
        meta = chart.getDatasetMeta(0);
      
      datasets.forEach((item, i) => {
        if (Array.isArray(item.data) && item.data.length > length) {
          index = i;
          length = item.data.length; 
        }
      });
      meta = chart.getDatasetMeta(index);

      return labels.map(function(label, i) {
        const style = meta.controller.getStyle(i);
        return {
          text: label,
          fillStyle: style.backgroundColor,
          strokeStyle: style.borderColor,
          lineWidth: style.borderWidth,
          hidden: isNaN(datasets[index].data[i]) || meta.data[i].hidden,

          // Extra data used for toggling the correct item
          index: i
        };
      });
    }
    return [];
  }
  
  private chartLegendFilter (itemLabel: any, chartData: any) {
    const datasets = (chartData && chartData.datasets) || [];

    if (itemLabel && datasets.length && typeof itemLabel.datasetIndex === "number") {            
      const datasetItem = datasets[itemLabel.datasetIndex],
          data = datasetItem ? datasetItem.data : "";
          
      if (Array.isArray(data) && data.length) {
          return itemLabel;
      }
    }
    
    return null;
  };

  private saveChartInitObject(aioInitChartObject: aioInitChartObject, aioChartElementId?: string, aioChartElement?: any) {
    if (aioChartElementId && aioChartElement) {
      this.aioChartObject.chartElementId = aioChartElementId;
      this.aioChartObject.chartElement = aioChartElement;
      this.aioChartObject.chartContex = aioChartElement.nativeElement.getContext('2d');
    }
    
    if (aioInitChartObject && aioInitChartObject.data) {
        let dataMaxLength = 0,
          alpha = 0.8,
          data = aioInitChartObject.data,
          isLabelsExist = data.labels && data.labels.length,
          commonType = aioInitChartObject.type;
  
          data.datasets.forEach((item) => {
            let dataLength = item.data.length,
              itemType = item.type || commonType;

            if (dataLength > dataMaxLength) {
                dataMaxLength = dataLength;
            }

            if (['line', 'radar'].includes(itemType)) {
              dataLength = 1;
              alpha = 0.2;

              if (!item.borderColor && !item.fill) {
                item.borderColor = "rgba(255, 0, 0 ,0.8)";
              }
            }

            if (!item.backgroundColor || Array.isArray(item.backgroundColor) && item.backgroundColor.length < dataLength) {
              item.backgroundColor = generateColors(dataLength, alpha);
            }
        });

        data.labels = isLabelsExist ? data.labels : generateDefaultLabels(dataMaxLength);
    }

    if (!this.aioChartObject.originalChartData) {
      this.aioChartObject.originalChartData = aioInitChartObject;
    }
  }

  private init(chartConfig?: aioInitChartObject) {
    let aioChartObject = this.aioChartObject,
        isRadiusElement = false;
    
    if (aioChartObject && aioChartObject.chartElement) {
      let element = aioChartObject.chartElement.nativeElement ,
        configurations = chartConfig || aioChartObject.originalChartData || {};

      if (this.aioChartObject.chart) {
        this.destroyChart();
      }

      if (configurations) {
        const type = configurations ? configurations.type : "",
          options = configurations["options"] || (configurations["options"] = {}),
          legend = options["legend"]  || (options["legend"] = {}),
          labels = legend["labels"]  || (legend["labels"] = {});
        
        isRadiusElement = ["doughnut", "pie", "polarArea"].includes(type);

        if (isRadiusElement) {
          if (!labels["generateLabels"]) {
              labels["generateLabels"] = this.generateLabels;
          }
          if (!legend["onClick"]) {
              legend["onClick"] = this.legendOnClick;
          }
        } else if (!labels["filter"]) {
          labels["filter"] = this.chartLegendFilter;
        }
      }

      this.isChartInit = true;

      const _chart = this.aioChartObject.chart = new Chart( element, _.cloneDeep(configurations)),
        scale = isRadiusElement && (_chart || {}).scale;
      
      if(scale && scale.getDistanceFromCenterForValue) {
        scale.getDistanceFromCenterForValue = (function() {
          const selfGetDistanceFromCenterForValue = scale.getDistanceFromCenterForValue;
          return function(value) {
            const result = selfGetDistanceFromCenterForValue.call(this, value);
            return result < 0 ? 0 : result;
          };
        })();
      }
    }
  }

  private aioUpdateChart () {
    if (this.isChartSet()) {
      this.aioChartObject.chart.update();
    }
  }

  private updateObjects (obj, chartFields, startIndex?: number) {
    let type = Array.isArray(obj) ? 'array' : (
      (obj && (typeof obj === 'object')) ? 'object' : ''
    );

    switch (type) {
      case 'array': {
        let length = startIndex ? chartFields.length - startIndex : chartFields.length;

        obj.forEach( (item, index) => {
          let currentIndex = startIndex ? startIndex + index : index; 
          if (index < length) {
            chartFields[currentIndex] = this.updateObjects( item, chartFields[currentIndex]);
          } else {
            chartFields.push(item);
          }
        });
        break;
      }

      case 'object': {
        for(let key in obj) {
          if (obj.hasOwnProperty(key) && !key.includes('_', 0)) {
            chartFields[key] = this.updateObjects(obj[key], chartFields[key]);
          }
        }
        break;
      }
    
      default:
        return obj;
    }

    return chartFields;
  }

  private isChartSet() {
    return (this.aioChartObject && this.aioChartObject.chart) ? true : false;
  }

  isAioIChartInit () {
    return this.isChartInit;
  }

  getElementId () {
    return this.aioChartObject ? this.aioChartObject.chartElementId : null;
  }

  getElement () {
    return this.aioChartObject ? this.aioChartObject.chartElement : null;
  }

  getChart () {
    return this.aioChartObject ? this.aioChartObject.chart : null;
  }

  getOriginalData () {
    return this.aioChartObject ? _.cloneDeep(this.aioChartObject.originalChartData) : null;
  }

  getChartObject () {
    return this.aioChartObject ? this.aioChartObject : null;
  }

  updateChart (callback) {
    if (this.isChartSet()) {
      let chart = this.aioChartObject.chart;

      if (callback) {
        callback.apply(chart);

        this.aioUpdateChart();

        if (!this.aioChartObject || !this.aioChartObject.chart) {
          this.isChartInit = false;
        }
      }
    }
  }

  updateChartOptions (options) {
    if (this.isChartSet()) {
      let chart = this.aioChartObject.chart.options;

      this.updateObjects(options, chart);

      this.aioUpdateChart();
    }
  }

  updateChartLabels (labels, index?: number) {
    if (this.isChartSet()) {
      let chartLabels = this.aioChartObject.chart.data,
        labelsLength = chartLabels.labels.length;

      if (index) {
        if (index < labelsLength) {
          chartLabels.labels[index] = labels;
        } else {
          chartLabels.labels.push(labels);
        }
      } else {
        chartLabels.labels = Array.isArray(labels) ? labels : [labels];
      }

      this.aioUpdateChart();
    }
  }

  updateChartDatasets (datasets, startIndex?: number) {
    if (this.isChartSet()) {
      const isEmpty = _.isEmpty(datasets),
        isArray = _.isArray(datasets),
        isObject = _.isObject(datasets),
        isIndex = (typeof startIndex === "number"),
        chartDatasets = this.aioChartObject.chart.data.datasets,
        index = startIndex && startIndex > chartDatasets.length ? chartDatasets.length - 1  : startIndex;

      if(isEmpty) {
        this.aioChartObject.chart.data.datasets = isIndex ? chartDatasets.splice(index, 1) : [];
      } else if(isIndex) {
        this.updateObjects((isArray ? datasets : [datasets]), chartDatasets, index);
      } else if(isArray) {
        this.aioChartObject.chart.data.datasets = _.cloneDeep(datasets);
      } else if(isObject) {
        chartDatasets.push(_.cloneDeep(datasets));
      }
  
      this.aioUpdateChart();
    }
  }

  destroyChart () {
    if (this.isChartSet()) {
      this.aioChartObject.chart.destroy();

      delete this.aioChartObject.chart;
      
      this.isChartInit = false;
    }
  }

  initChart (chartConfig?: aioInitChartObject, joinWithConfig?:boolean) {
    if(joinWithConfig) {
      chartConfig = this.aioChartObject.originalChartData = _.merge(this.aioChartObject.originalChartData || {}, chartConfig);
    }

    this.saveChartInitObject(chartConfig);
    this.init(chartConfig);
  }
}

export interface aioObject {
    [propName: string]: any
}

export interface aioInitChartObject {
    type?: string,
    data?: {
      [propName: string]: any,
      datasets?: Array<chartDatasetsItem>
    },
    options?: aioObject
}

export interface chartDatasetsItem {
  __aioChartChild?: {
    id: string,
    mappingLink: aioObject
  },
  [propName: string]: any
}

export interface aioChartInit {
  chartElementId?: string,
  originalChartData?: aioInitChartObject,
  chartElement?: any,
  chartContex?: any,
  chart?: Chart 
}
