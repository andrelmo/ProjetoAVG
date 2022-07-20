import { InformacoesComplementaresDto } from "./InformacoesComplementaresDto";

export class DadosContratoDto {
    public numero!: string;
    public valor!: number;
    public tipoDeContrato!: string;
    public fornecedor!: string;
    public ultimaAprovacao!: string;
    public id!: string;
    public textoWorkItem!: string;
    public tarefa!: string;
    public descricaoTarefa!: string;
    public dataCriacao!: string;
    public informacoesComplementares: InformacoesComplementaresDto[] = [];
}