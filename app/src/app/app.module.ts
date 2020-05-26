import {
    NgModule
} from '@angular/core';
import {
    BrowserModule
} from '@angular/platform-browser';
import {
    FormsModule
} from '@angular/forms';
import {
    RouterModule
} from '@angular/router';
import {
    HttpClientModule
} from '@angular/common/http';
import {
    IonicModule
} from '@ionic/angular';
import {
    IonicStorageModule
} from '@ionic/storage';
import {
    ApperyioModule
} from "./scripts/apperyio/apperyio.module";
import {
    PipesModule
} from './scripts/pipes.module';
import {
    DirectivesModule
} from './scripts/directives.module';
import {
    ComponentsModule
} from './scripts/components.module';
import {
    CustomModulesModule
} from './scripts/custom-modules.module';
import {
    app
} from './app';
import {
    AppRoutingModule
} from './app-routing.module';
import {
    ExportedClass as SignupService
} from './scripts/services/SignupService';
import {
    ExportedClass as LogoutService
} from './scripts/services/LogoutService';
import {
    ExportedClass as LoginService
} from './scripts/services/LoginService';
import {
    ExportedClass as UserDB_UserProfile_list_service
} from './scripts/services/UserDB_UserProfile_list_service';
import {
    ExportedClass as UserDB_UserProfile_delete_service
} from './scripts/services/UserDB_UserProfile_delete_service';
import {
    ExportedClass as greetingScript_service
} from './scripts/services/greetingScript_service';
import {
    ExportedClass as UserDB_UserProfile_create_service
} from './scripts/services/UserDB_UserProfile_create_service';
import {
    ExportedClass as FormUtils
} from './scripts/custom/FormUtils';
import {
    WebView
} from '@ionic-native/ionic-webview/ngx';
import {
    Device
} from '@ionic-native/device/ngx';
import {
    SplashScreen
} from '@ionic-native/splash-screen/ngx';
import {
    StatusBar
} from '@ionic-native/status-bar/ngx';
import {
    Keyboard
} from '@ionic-native/keyboard/ngx';
@NgModule({
    declarations: [
        app
    ],
    imports: [
        BrowserModule,
        FormsModule,
        IonicModule.forRoot(),
        HttpClientModule,
        ApperyioModule,
        PipesModule,
        DirectivesModule,
        ComponentsModule,
        CustomModulesModule,
        IonicStorageModule.forRoot(),
        AppRoutingModule
    ],
    bootstrap: [
        app
    ],
    entryComponents: [
        //app
    ],
    providers: [
        StatusBar,
        SplashScreen,
        WebView,
        Device,
        Keyboard,
        SignupService,
        LogoutService,
        LoginService,
        UserDB_UserProfile_list_service,
        UserDB_UserProfile_delete_service,
        greetingScript_service,
        UserDB_UserProfile_create_service,
        FormUtils,
    ]
})
export class AppModule {}