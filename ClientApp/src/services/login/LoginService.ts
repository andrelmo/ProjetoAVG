import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RequisicaoLoginDto } from "../../app/Dto/RequisicaoLoginDto";
import { RespostaLoginDto } from "../../app/Dto/RespostaLoginDto";
import { ServiceBase } from "../ServiceBase";

@Injectable({ providedIn: 'root' })
export class LoginService extends ServiceBase {
    private _baseUrlApis: string;

    constructor(private http: HttpClient) {
        super();

        this._baseUrlApis = this.getUrlApis();
    }

    public VerificarLogin(requisicao: RequisicaoLoginDto): Observable<RespostaLoginDto> {
        return (this.http.post<RespostaLoginDto>(this._baseUrlApis + "VerificarLogin",
            JSON.stringify(requisicao), { headers: this.getHeaders() }));
    }
}