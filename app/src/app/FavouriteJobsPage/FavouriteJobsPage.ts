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
    templateUrl: 'FavouriteJobsPage.html',
    selector: 'page-favourite-jobs-page',
    styleUrls: ['FavouriteJobsPage.scss']
})
export class FavouriteJobsPage {
    public userList: any;
    public currentItem: any = null;
    public mappingData: any = {};
    public __getMapping(_currentItem, property, defaultValue, isVariable ? , isSelected ? ) {
        return this.$aio_mappingHelper.getMapping(this.mappingData, _currentItem, property, defaultValue, isVariable, isSelected);
    }
    deleteUser(userId) {
        this.Apperyio.getService("UserDB_UserProfile_delete_service").then(
            service => {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return;
                }
                service.execute({
                    data: {},
                    params: {
                        "_id": userId
                    },
                    headers: {}
                }).subscribe(
                    (res: any) => {
                        this.Apperyio.execDataService(this, "getUserList"); // Change service_name to created DataSource name;
                    },
                    (err: any) => {
                        console.log(err)
                    }
                )
            }
        )
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef) {}
    ionViewWillEnter() {
        this.pageIonViewWillEnter__j_0();
    }
    async pageIonViewWillEnter__j_0(event ? , currentItem ? ) {
        /* Invoke data service */
        this.invokeService_getUserList()
    }
    async button4Click__j_10(event ? , currentItem ? ) {
        /* Navigate to Page */
        this.Apperyio.navigateTo('AddJobPage');
    }
    private $aio_dataServices = {
        "getUserList": "invokeService_getUserList"
    }
    invokeService_getUserList(cb ? : Function) {
        this.Apperyio.getService("UserDB_UserProfile_list_service").then(
            async (service) => {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return;
                }
                let data = {}
                let params = {}
                let headers = {}
                service.execute({
                    data: data,
                    params: params,
                    headers: headers
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {}
                        /* Mapping */
                        this.userList = this.$aio_mappingHelper.updateData(this.userList, [], this.$aio_mappingHelper.getSubdata(res, []));
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