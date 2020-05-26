/**
 * Module initializes rest service greetingScript_service
 */
import {
    Injectable
} from '@angular/core';
import _ from "lodash";
import {
    ApperyioRestService,
    EntityApiService
} from '../apperyio/apperyio';
/**
 * Api is a generic REST Api handler. Set your API url first.
 extends ApperyioService*/
@Injectable()
class greetingScript_service {
    merge_requests(defaults, request) {
        return _.mergeWith({}, defaults, request, function(a, b) {
            if (_.isUndefined(b)) {
                return a;
            }
        });
    }
    constructor(private apperyioService: ApperyioRestService, private entityAPI: EntityApiService) {}
    execute(reqOpts ? : any) {
        /**
         * REST options. Initial values of "headers", "params", "data" and "echo" store are stored in models.js.
         * @property {string} url                             - Absolute or relative URL of the resource that is being requested.
         * @property {string} method                          - HTTP method (e.g. 'GET', 'POST', etc)
         * @property {Object} headers                         - Map of strings or functions which return strings representing HTTP headers
                                                                to send to the server. If the return value of a function is null,
                                                                the header will not be sent.
         * @property {Object.<string, string|Object>} params  - Map of strings or objects which will be turned to ?key1=value1&key2=value2
                                                                after the url. If the value is not a string, it will be JSONified.
         * @property {string|Object} data                     - Data to be sent as the request message data.
         * @property {string} echo                            - If echo mode is on then service will return echo value instead of the rest response
         * @property {Object.<string, string>} aio_config     - Apperyio configuration object
         * @property {string} requestType                     - Request type
         * @property {string} responseType                    - Response type
         * @property {string} serviceName                     - Service name
         */
        let config = {
            url: "https://api.appery.io/rest/1/code/013ca464-f4c7-4b10-8ce3-8e1751480ac7/exec",
            method: "post",
            headers: this.entityAPI.get("greetingScript_service.request.headers"),
            params: this.entityAPI.get("greetingScript_service.request.query"),
            data: this.entityAPI.get("greetingScript_service.request.body", reqOpts.data, true, true) || "",
            aio_config: {
                requestType: "data",
                responseType: "json",
                serviceName: "greetingScript_service"
            }
        };
        if (!reqOpts || typeof reqOpts !== "object") {
            reqOpts = {};
        }
        return this.apperyioService.run(this.merge_requests(config, reqOpts));
    }
}
/*
    Service class should be exported as ExportedClass
*/
export {
    greetingScript_service as ExportedClass
};