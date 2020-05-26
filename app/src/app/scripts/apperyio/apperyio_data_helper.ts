import { Storage } from '@ionic/storage';

import {
    Injectable
} from '@angular/core';

@Injectable()
export class ApperyioDataHelperService {
    
    constructor(private storage: Storage) { }

    private _variables: {[name:string]: any} = {};

    setVariable(varName: string, value: any) {
        this._variables[varName] = value;
    }

    getVariable(varName: string): any {
        return this._variables[varName];
    }

    setStorage(varName: string, value: any): Promise<any> {
        return this.storage.set(varName, value);
    }

    getStorage(varName: string): Promise<any> {
        return this.storage.get(varName);
    }
    
    removeStorage(varName: string): Promise<any> {
        return this.storage.remove(varName);
    }
};