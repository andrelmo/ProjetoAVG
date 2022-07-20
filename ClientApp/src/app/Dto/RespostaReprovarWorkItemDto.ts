import { ObjetoRespostaBaseDto } from "./ObjetoRespostaBaseDto";

export class RespostaReprovarWorkItemDto extends ObjetoRespostaBaseDto {
    public reprovadoPor!: string;

    constructor() {
        super();
    }
}