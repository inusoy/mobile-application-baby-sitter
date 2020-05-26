import {
    Injectable
} from '@angular/core';
@Injectable()
export class ModalScreensService {
    private modalScreens: {
        [name: string]: any
    } = {};
    async getModalScreen(screenName: string) {
        return this.modalScreens[screenName]
    }
};