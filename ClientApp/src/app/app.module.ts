import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { IntegracaoSAPService } from '../services/integracao/IntegracaoSAPService';
import { AcessoSAPService } from '../services/Acesso/AcessoSAP';
import { IntegracaoSAPListagemComponent } from './IntegracaoSAP/IntegracaoSAP.Listagem.Component';
import { LoginComponent } from './Login/Login.Component';
import { UsuarioService } from '../services/usuario/usuarioService';
import { GuardaRotas } from './autorizacao/guarda.rotas';
import { LoginService } from '../services/login/LoginService';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    IntegracaoSAPListagemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'entrar', component: LoginComponent },
      { path: 'aprovacoes', component: IntegracaoSAPListagemComponent, canActivate: [GuardaRotas] },
    ])
  ],
    providers:
        [
            IntegracaoSAPService,
            AcessoSAPService,
            UsuarioService,
            LoginService
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }