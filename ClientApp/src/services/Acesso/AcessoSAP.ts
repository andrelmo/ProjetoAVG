import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginAtualDto } from "../../app/Dto/LoginAtualDto";
import { ServiceBase } from "../ServiceBase";

@Injectable({ providedIn: 'root' })
export class AcessoSAPService extends ServiceBase {
    private _baseUrlApis: string;

    constructor(private http: HttpClient) {
        super();

        this._baseUrlApis = this.getUrlApis();
    }

    public BuscarLoginAtual(): LoginAtualDto {
        var _loginAtual = new LoginAtualDto();

        _loginAtual.usuarioSap = "lpj.func1";
        _loginAtual.senhaSap = "Lpj@func123456";

        return (_loginAtual);
    }
}