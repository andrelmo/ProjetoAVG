import { ObjetoRespostaBaseDto } from "./ObjetoRespostaBaseDto";

export class RespostaAprovarWorkItemDto extends ObjetoRespostaBaseDto {
    public aprovadoPor!: string;

    constructor() {
        super();
    }
}