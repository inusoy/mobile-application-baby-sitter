import { constants } from "../constants"


function parsePath(path, data) {
  let parts = path.split(".");
  let res = data[parts[0]];
  let i = 1;
  while (res && i < parts.length) {
    res = res[parts[i]];
    i++;
  }
  return res;
}
function addByPath(path, data, value) {
  let parts = path.split(".");
  let res = data;
  let i = 0;
  while (i < parts.length - 1) {
    if (!res[parts[i]] || typeof res[parts[i]] !== "object") {
        res[parts[i]] = {};
    }
    res = res[parts[i]];
    i++;
  }
  res[parts[ parts.length - 1]] = value;
}

export class ApperyioConfigService {
    constants;
    constructor() {
        this.constants = {...constants};
    }
    add( exp, value? ) {
        addByPath(exp, this.constants, value);
    }
    all() {
        return { ...this.constants };
    }
    get( exp, defaultValue? ) {
        var result;

        if ( this.constants[ exp ] !== undefined ) {
            result = this.constants[ exp ];
        } else {
            try {
                result = parsePath( exp, this.constants );

            } catch ( e ) {
                result = defaultValue !== undefined ? defaultValue : undefined;
            }
        }
        return result;
    }
    remove( exp ) {
        var result = this.get( exp );
        this.add( exp );
        return result;
    }
};