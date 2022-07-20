import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IntegracaoSAPService } from "../../services/integracao/IntegracaoSAPService";
import { RequisicaoLerWorksItemsDto } from "../Dto/RequisicaoLerWorksItemsDto";
import { AcessoSAPService } from "../../services/Acesso/AcessoSAP";
import { RequisicaoAprovarWorkItemDto } from "../Dto/RequisicaoAprovarWorkItemDto";
import { ItemAprovaReprovaWorkitemDto } from "../Dto/ItemAprovaReprovaWorkitemDto";
import { RequisicaoReprovarWorkItemDto } from "../Dto/RequisicaoReprovarWorkItemDto";
import { TipoWorkItemDto } from "../Dto/TipoWorkItemDto";

@Component(
    {
        selector: 'app-integracaosap-listagem',
        templateUrl: './IntegracaoSAP.Listagem.Component.html',
        styleUrls: ['./IntegracaoSAP.Listagem.Component.css']
    })
export class IntegracaoSAPListagemComponent implements OnInit {
    public ListaTipoWorkItems: TipoWorkItemDto[] = [];

    constructor(private integracaoSAPServico: IntegracaoSAPService,
        private acessoSAPService: AcessoSAPService,
        private router: Router) {

    }

    ngOnInit(): void {
        var _requiscaoLerWorkItems = new RequisicaoLerWorksItemsDto();
        var _loginAtual = this.acessoSAPService.BuscarLoginAtual();

        _requiscaoLerWorkItems.senhaSAP = _loginAtual.senhaSap;
        _requiscaoLerWorkItems.usuarioSAP = _loginAtual.usuarioSap;

        this.integracaoSAPServico.VerificarLerWorkItems(_requiscaoLerWorkItems).subscribe(
            retorno => {
                if (retorno.IsErro) {
                    window.alert(retorno.MensagemErro);
                } else {
                    this.ListaTipoWorkItems = retorno.ListaTipoWorkItems;
                }
            },
            err => {
                window.alert('Ocorreu o seguinte erro: ' + err.error);
            }
        );
    }

    public AprovarWorkItem(id: string) {
        if (window.confirm("Confirma a Aprovação?")) {
            var _loginAtual = this.acessoSAPService.BuscarLoginAtual();
            var _requisicao = new RequisicaoAprovarWorkItemDto();
            var _itemAprovar = new ItemAprovaReprovaWorkitemDto();

            _itemAprovar.acao = "A";
            _itemAprovar.id = id;

            _requisicao.aprovadoPor = _loginAtual.usuarioSap;
            _requisicao.item = [];
            _requisicao.item.push(_itemAprovar);
            _requisicao.senhaSAP = _loginAtual.senhaSap;
            _requisicao.usuarioSAP = _loginAtual.usuarioSap;

            this.integracaoSAPServico.ExecutarAprovarWorkItem(_requisicao).subscribe(
                resultado => {
                    if (resultado.IsErro) {
                        window.alert(resultado.MensagemErro);
                    } else {
                        window.alert("Aprovação efetuada!");
                        this.ListaTipoWorkItems = this.ListaTipoWorkItems.filter(i => i.Id != id);
                    }
                },
                erro => {
                    window.alert("Ocorreu o seguinte erro: " + erro.error);
                }
            );
        }
    }

    public ReprovarWorkItem(id: string) {
        if (window.confirm("Confirma a Reprovação?")) {
            var _loginAtual = this.acessoSAPService.BuscarLoginAtual();
            var _requisicao = new RequisicaoReprovarWorkItemDto();
            var _itemAprovar = new ItemAprovaReprovaWorkitemDto();

            _itemAprovar.acao = "R";
            _itemAprovar.id = id;

            _requisicao.reprovadoPor = _loginAtual.usuarioSap;
            _requisicao.item = [];
            _requisicao.item.push(_itemAprovar);
            _requisicao.senhaSAP = _loginAtual.senhaSap;
            _requisicao.usuarioSAP = _loginAtual.usuarioSap;

            this.integracaoSAPServico.ExecutarReprovarWorkItem(_requisicao).subscribe(
                resultado => {
                    if (resultado.IsErro) {
                        window.alert(resultado.MensagemErro);
                    } else {
                        window.alert("Reprovação efetuada!");
                        this.ListaTipoWorkItems = this.ListaTipoWorkItems.filter(i => i.Id != id);
                    }
                },
                erro => {
                    window.alert("Ocorreu o seguinte erro: " + erro.error);
                }
            );
        }
    }
}