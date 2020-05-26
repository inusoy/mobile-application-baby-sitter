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
    ExportedClass as FormUtils
} from '../scripts/custom/FormUtils';
import {
    ViewChild
} from '@angular/core';
@Component({
    templateUrl: 'Login.html',
    selector: 'page-login',
    styleUrls: ['Login.scss']
})
export class Login {
    public currentItem: any = null;
    public mappingData: any = {};
    public __getMapping(_currentItem, property, defaultValue, isVariable ? , isSelected ? ) {
        return this.$aio_mappingHelper.getMapping(this.mappingData, _currentItem, property, defaultValue, isVariable, isSelected);
    }
    @ViewChild('loginForm_el', {
        static: false
    }) public loginForm_el;
    @ViewChild('loginForm', {
        static: true
    }) public loginForm;
    markFormControlsAsTouched() {
        this.formUtils.markFormControlsAsTouched(this.loginForm.form, ['username', 'password']);
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public formUtils: FormUtils) {}
    ngOnInit() {
        this.pageNgOnInit__j_36();
    }
    async pageNgOnInit__j_36(event ? , currentItem ? ) {
        /* Run TypeScript */
        const databaseId = this.Apperyio.config.get("SecuritySettings.database_id");
        if (databaseId == 'SPECIFY YOUR DATABASE ID') {
            const alert = await this.Apperyio.getController("AlertController").create({
                header: 'Alert',
                subHeader: 'Database Id is not specified',
                message: 'Please open SecuritySettings and specify your database id as database_id property',
                buttons: ['OK']
            });
            await alert.present();
        }
        console.log('login screen');
        this.formUtils.showPasswordOnClick('page-login');
    }
    async loginformNgSubmit__j_45(event ? , currentItem ? ) {
        if (this.loginForm.valid) {
            /* Invoke data service */
            this.invokeService_dbLogin()
        }
    }
    async signinbuttonClick__j_52(event ? , currentItem ? ) {
        /* Run TypeScript */
        this.formUtils.markFormControlsAsTouched(this.loginForm.form, ['username', 'password']);
    }
    private $aio_dataServices = {
        "dbLogin": "invokeService_dbLogin"
    }
    invokeService_dbLogin(cb ? : Function) {
        this.Apperyio.getService("LoginService").then(
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
                data = this.$aio_mappingHelper.updateData(data, [], this.$aio_mappingHelper.getComponentPropValue.call(this, 'loginForm', 'ionic4form', 'formData'));
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
                        /* Mapping */
                        await this.$aio_mappingHelper.setServiceDataValue("sessionToken", [], this.$aio_mappingHelper.getSubdata(res, ["sessionToken"]));
                        /* Dismiss loading */
                        await this.Apperyio.getController("LoadingController").dismiss();
                        /* Navigate to Page */
                        this.Apperyio.navigateTo('Home_Database_Login_and_Signup');
                        this.mappingData = { ...this.mappingData,
                            ...mappingData
                        };
                        if (cb && typeof cb === "function") cb(res);
                    },
                    /* onerror */
                    async (err: any) => {
                        /* Dismiss loading */
                        await this.Apperyio.getController("LoadingController").dismiss();
                        /* Present Toast */
                        await (async () => {
                            let options = {
                                'color': 'danger',
                                'duration': 1000,
                                'message': 'Invalid user\u0027s credentials',
                                'position': 'top',
                                'buttons': []
                            }
                            let controller = this.Apperyio.getController('ToastController');
                            const toast = await controller.create(options);
                            return await toast.present();
                        })();
                    }
                )
            }
        );
    }
}