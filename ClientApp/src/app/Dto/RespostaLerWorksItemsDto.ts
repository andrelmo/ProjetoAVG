import { ObjetoRespostaBaseDto } from "./ObjetoRespostaBaseDto";
import { TipoWorkItemDto } from "./TipoWorkItemDto";

export class RespostaLerWorksItemsDto extends ObjetoRespostaBaseDto {
    public ListaTipoWorkItems: TipoWorkItemDto[] = [];

    constructor() {
        super();
    }
}