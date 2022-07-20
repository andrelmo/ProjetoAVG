import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { UsuarioService } from "../../services/usuario/usuarioService";

@Injectable({
    providedIn: "root"
})
export class GuardaRotas implements CanActivate {
    constructor(private router: Router, private usuarioService: UsuarioService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.usuarioService.usuarioAutenticado()) {
            return (true);
        }
        else {
            this.router.navigate(['/entrar'], { queryParams: { returnUrl: state.url } });
            return (false);
        }
    }
}