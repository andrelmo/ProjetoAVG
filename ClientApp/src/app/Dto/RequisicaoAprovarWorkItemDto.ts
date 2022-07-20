import { ItemAprovaReprovaWorkitemDto } from "./ItemAprovaReprovaWorkitemDto";
import { ObjetoLoginDto } from "./ObjetoLoginDto";

export class RequisicaoAprovarWorkItemDto extends ObjetoLoginDto {
    public item: ItemAprovaReprovaWorkitemDto[] = []
    public aprovadoPor!: string;

    constructor() {
        super();
    }
}