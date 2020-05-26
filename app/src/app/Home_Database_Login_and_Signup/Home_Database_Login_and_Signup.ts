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
    templateUrl: 'Home_Database_Login_and_Signup.html',
    selector: 'page-home_-database_-login_and_-signup',
    styleUrls: ['Home_Database_Login_and_Signup.scss']
})
export class Home_Database_Login_and_Signup {
    public currentItem: any = null;
    public mappingData: any = {};
    public __getMapping(_currentItem, property, defaultValue, isVariable ? , isSelected ? ) {
        return this.$aio_mappingHelper.getMapping(this.mappingData, _currentItem, property, defaultValue, isVariable, isSelected);
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef) {}
    async button3Click__j_94(event ? , currentItem ? ) {
        /* Navigate to Page */
        this.Apperyio.navigateTo('FavouriteJobs');
    }
    async button4Click__j_96(event ? , currentItem ? ) {
        /* Navigate to Page */
        this.Apperyio.navigateTo('AddJobPage');
    }
    async logoutbuttonClick__j_102(event ? , currentItem ? ) {
        /* Invoke data service */
        this.invokeService_dbLogout()
    }
    private $aio_dataServices = {
        "dbLogout": "invokeService_dbLogout"
    }
    invokeService_dbLogout(cb ? : Function) {
        this.Apperyio.getService("LogoutService").then(
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
                headers = this.$aio_mappingHelper.updateData(headers, ['X-Appery-Session-Token'], await this.$aio_mappingHelper.getServiceDataValue("sessionToken", []));
                /* Present Loading */
                await (async () => {
                    let options = {
                        'spinner': 'circles',
                    }
                    let controller = this.Apperyio.getController('LoadingController');
                    const loading = await controller.create(options);
                    return await loading.present();
                })();
                service.execute({
                    data: data,
                    params: params,
                    headers: headers
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {}
                        /* Dismiss loading */
                        await this.Apperyio.getController("LoadingController").dismiss();
                        /* Navigate to Page */
                        this.Apperyio.navigateTo('Login');
                        this.mappingData = { ...this.mappingData,
                            ...mappingData
                        };
                        if (cb && typeof cb === "function") cb(res);
                    },
                    /* onerror */
                    async (err: any) => {
                        /* Dismiss loading */
                        await this.Apperyio.getController("LoadingController").dismiss();
                        /* Navigate to Page */
                        this.Apperyio.navigateTo('Login');
                    }
                )
            }
        );
    }
}