import {
    NgModule
} from '@angular/core';
import {
    HttpClientModule,
    HttpClientJsonpModule
} from '@angular/common/http';
import {
    AppClientModule
} from "./appclient/appclient.module";
import {
    ApperyioRestService
} from './apperyio_restservice';
import {
    ApperyioConfigService
} from './config_service';
import {
    EntityApiService
} from './entityapi_service';
import {
    ApperyioHelperService
} from './apperyio_helper';
import {
    ApperyioMappingHelperService
} from './apperyio_mapping_helper';
import {
    ApperyioDataHelperService
} from './apperyio_data_helper';
import {
    ApperyioNativeHelperService
} from './apperyio_native_helper';
import {
    ModalScreensService
} from './modal_screens_service';
@NgModule({
    imports: [
        HttpClientModule,
        HttpClientJsonpModule,
        AppClientModule
    ],
    providers: [
        ApperyioRestService, ApperyioConfigService, EntityApiService, ApperyioHelperService, ApperyioMappingHelperService, ApperyioDataHelperService, ApperyioNativeHelperService
        , ModalScreensService
    ]
})
export class ApperyioModule {}