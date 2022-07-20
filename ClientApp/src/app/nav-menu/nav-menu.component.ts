import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuarioService';
import { LoginAtualDto } from '../Dto/LoginAtualDto';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
    isExpanded = false;

    constructor(private router: Router, private usuarioService: UsuarioService) {

    }

    collapse() {
        this.isExpanded = false;
    }

    toggle() {
        this.isExpanded = !this.isExpanded;
    }

    public UsuarioLogado(): boolean {
        if (this.usuarioService.usuarioAutenticado()) {
            return (true);
        }
        else {
            return (false);
        }
    }

    sair() {
        this.usuarioService.limparSessao();
        this.router.navigate(['/']);
    }

    getUsuario(): LoginAtualDto {
        return (this.usuarioService.getUsuario());
    }
}
