import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RequisicaoAprovarWorkItemDto } from "../../app/Dto/RequisicaoAprovarWorkItemDto";
import { RequisicaoLerWorksItemsDto } from "../../app/Dto/RequisicaoLerWorksItemsDto";
import { RequisicaoReprovarWorkItemDto } from "../../app/Dto/RequisicaoReprovarWorkItemDto";
import { RespostaAprovarWorkItemDto } from "../../app/Dto/RespostaAprovarWorkItemDto";
import { RespostaLerWorksItemsDto } from "../../app/Dto/RespostaLerWorksItemsDto";
import { RespostaReprovarWorkItemDto } from "../../app/Dto/RespostaReprovarWorkItemDto";
import { ServiceBase } from "../ServiceBase";

@Injectable({ providedIn: 'root' })
export class IntegracaoSAPService extends ServiceBase {
    private _baseUrlApis: string;

    constructor(private http: HttpClient) {
        super();

        this._baseUrlApis = this.getUrlApis();
    }

    public ExecutarReprovarWorkItem(requisicao: RequisicaoReprovarWorkItemDto): Observable<RespostaReprovarWorkItemDto> {
        return (this.http.post<RespostaReprovarWorkItemDto>(this._baseUrlApis + "ExecutarReprovarWorkItem",
            JSON.stringify(requisicao), { headers: this.getHeaders() }));
    }

    public ExecutarAprovarWorkItem(requisicao: RequisicaoAprovarWorkItemDto): Observable<RespostaAprovarWorkItemDto> {
        return (this.http.post<RespostaAprovarWorkItemDto>(this._baseUrlApis + "ExecutarAprovarWorkItem",
            JSON.stringify(requisicao), { headers: this.getHeaders() }));
    }

    public VerificarLerWorkItems(requisicao: RequisicaoLerWorksItemsDto): Observable<RespostaLerWorksItemsDto> {
        return (this.http.post<RespostaLerWorksItemsDto>(this._baseUrlApis + "VerificarLerWorkItems",
            JSON.stringify(requisicao), { headers: this.getHeaders() }));
    }
}