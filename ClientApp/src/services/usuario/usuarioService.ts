import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginAtualDto } from "../../app/Dto/LoginAtualDto";
import { ServiceBase } from "../ServiceBase";

@Injectable({ providedIn: 'root' })
export class UsuarioService extends ServiceBase {
    private _baseUrlApis: string;
    private _usuario: LoginAtualDto;

    constructor(private http: HttpClient) {
        super();

        this._baseUrlApis = this.getUrlApis();
    }

    public setUsuario(usuario: LoginAtualDto) {
        this._usuario = usuario;
        sessionStorage.setItem("usuarioAutenticado", JSON.stringify(this._usuario));
    }

    getUsuario(): LoginAtualDto {
        let usuario_json = sessionStorage.getItem("usuarioAutenticado");
        this._usuario = JSON.parse(usuario_json);

        return (this._usuario);
    }

    public usuarioAutenticado(): boolean {
        return (this._usuario != null && this._usuario.usuarioSap != "" && this._usuario.senhaSap != "");
    }

    public limparSessao() {
        sessionStorage.setItem("usuarioAutenticado", "");
        this._usuario = null;
    }
}