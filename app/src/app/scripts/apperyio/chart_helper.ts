import {
    Injectable
} from '@angular/core';

import {ApperyioChart, aioInitChartObject, aioObject} from './apperyio_chart';

@Injectable()
export class ChartHelperService {
    initChartComponent(component: ApperyioChart, chartConfig?: aioInitChartObject, joinWithConfig?:boolean) {
        component.initChart(chartConfig, joinWithConfig);
    }

    destroyChartComponent(component: ApperyioChart) {
        component.destroyChart();
    }

    updateChartComponent(component: ApperyioChart, callback: Function) {
        component.updateChart(callback);
    }

    updateChartOptionsComponent(component: ApperyioChart, options: aioObject) {
        component.updateChartOptions(options);
    }

    updateChartLabelsComponent(component: ApperyioChart, labels: Array<string|Array<string>>|'string', index?: number) {
        component.updateChartLabels(labels, index);
    }

    updateChartDatasetsComponent(component: ApperyioChart, datasets: aioObject|Array<aioObject>, startIndex?: number) {
        component.updateChartDatasets(datasets, startIndex);
    }
}