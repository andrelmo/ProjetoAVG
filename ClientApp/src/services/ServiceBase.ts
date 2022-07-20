import { HttpHeaders } from "@angular/common/http";

export abstract class ServiceBase {
    protected getHeaders(): HttpHeaders {
        let _headers = new HttpHeaders().set("content-type", "application/json");

        return (_headers);
    }

    protected getUrlApis(): string {
        return ("https://webapiavg.azurewebsites.net/api/APIIntegracao/");
    }
}