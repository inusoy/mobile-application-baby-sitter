import {
    Component,
    ChangeDetectorRef
} from '@angular/core';
import {
    ApperyioHelperService
} from '../scripts/apperyio/apperyio_helper';
import {
    ApperyioMappingHelperService
} from '../scripts/apperyio/apperyio_mapping_helper';
import {
    ViewChild
} from '@angular/core';
@Component({
    templateUrl: 'AddJobPage.html',
    selector: 'page-add-job-page',
    styleUrls: ['AddJobPage.scss']
})
export class AddJobPage {
    public newJobName: string;
    public newJobAddress: string;
    public newJobDescription: string;
    public currentItem: any = null;
    public mappingData: any = {};
    public __getMapping(_currentItem, property, defaultValue, isVariable ? , isSelected ? ) {
        return this.$aio_mappingHelper.getMapping(this.mappingData, _currentItem, property, defaultValue, isVariable, isSelected);
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef) {}
    async button3Click__j_20(event ? , currentItem ? ) {
        /* Invoke data service */
        this.invokeService_createJob()
    }
    private $aio_dataServices = {
        "createJob": "invokeService_createJob"
    }
    invokeService_createJob(cb ? : Function) {
        this.Apperyio.getService("UserDB_UserProfile_create_service").then(
            async (service) => {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return;
                }
                let data = {}
                let params = {}
                let headers = {}
                this.$aio_changeDetector.detectChanges();
                /* Mapping */
                data = this.$aio_mappingHelper.updateData(data, ["userName"], this.$aio_mappingHelper.getSubdata(this.newJobName, []));
                data = this.$aio_mappingHelper.updateData(data, ["description"], this.$aio_mappingHelper.getSubdata(this.newJobDescription, []));
                data = this.$aio_mappingHelper.updateData(data, ["address"], this.$aio_mappingHelper.getSubdata(this.newJobAddress, []));
                service.execute({
                    data: data,
                    params: params,
                    headers: headers
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {}
                        /* Run TypeScript */
                        this.newJobName = "";
                        /* Navigate to Page */
                        this.Apperyio.navigateTo('FavouriteJobs');
                        this.mappingData = { ...this.mappingData,
                            ...mappingData
                        };
                        if (cb && typeof cb === "function") cb(res);
                    },
                    (err: any) => {
                        console.log(err);
                    }
                )
            }
        );
    }
}