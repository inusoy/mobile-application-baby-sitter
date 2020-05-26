import {
    Injectable
} from '@angular/core';
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
@Injectable()
export class ApperyioNativeHelperService {
    public audioinput;
    constructor(
        public webView: WebView, public device: Device, public splashScreen: SplashScreen, public statusBar: StatusBar, public keyboard: Keyboard
    ) {
        this.audioinput = (window as any).audioinput;
    }
};