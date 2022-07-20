import { Component, OnInit } from "@angular/core"
import { Router, ActivatedRoute } from "@angular/router";
import { LoginService } from "../../services/login/LoginService";
import { RequisicaoLoginDto } from "../Dto/RequisicaoLoginDto";
import { LoginAtualDto } from "../Dto/LoginAtualDto";
import { UsuarioService } from "../../services/usuario/usuarioService";

@Component(
    {
        selector: "app-login",
        templateUrl: "./Login.Component.html",
        styleUrls: ["./login.Component.css"]
    }
)
export class LoginComponent implements OnInit {
    public usuario: LoginAtualDto;
    public usuarioAutenticado: boolean;
    public returnUrl: string;
    public mensagem: string;
    private ativar_spinner: boolean;

    constructor(private router: Router,
        private activatedRouter: ActivatedRoute,
        private loginService: LoginService,
        private usuarioService: UsuarioService) {

    }

    ngOnInit(): void {
        this.usuario = new LoginAtualDto();
        this.usuarioAutenticado = false;
        this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
        this.ativar_spinner = false;
    }

    entrar() {
        this.ativar_spinner = true;

        var _requisicaoLogin = new RequisicaoLoginDto();

        _requisicaoLogin.senhaSAP = this.usuario.senhaSap;
        _requisicaoLogin.usuarioSAP = this.usuario.usuarioSap;

        this.loginService.VerificarLogin(_requisicaoLogin).subscribe
            (
                retorno => {
                    this.usuarioService.setUsuario(this.usuario);
                    this.ativar_spinner = false;

                    if (this.returnUrl == null) {
                        this.router.navigate(['/aprovacoes']);
                    }
                    else {
                        this.router.navigate([this.returnUrl]);
                    }
                },
                err => {
                    this.ativar_spinner = false;
                    this.mensagem = err.error;
                }
            );
    }
}