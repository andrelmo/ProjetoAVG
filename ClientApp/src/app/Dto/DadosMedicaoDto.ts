import { InformacoesComplementaresDto } from "./InformacoesComplementaresDto";

export class DadosMedicaoDto {
    public id!: string;
    public textoWorkItem!: string;
    public tarefa!: string;
    public descricaoTarefa!: string;
    public dataCriacao!: string;
    public numero!: string;
    public pedido!: string;
    public total!: number;
    public valorBoletim!: number;
    public informacoesComplementares: InformacoesComplementaresDto[] = [];
}