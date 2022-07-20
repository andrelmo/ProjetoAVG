import { ItemAprovaReprovaWorkitemDto } from "./ItemAprovaReprovaWorkitemDto";
import { ObjetoLoginDto } from "./ObjetoLoginDto";

export class RequisicaoReprovarWorkItemDto extends ObjetoLoginDto  {
    public item: ItemAprovaReprovaWorkitemDto[] = [];
    public reprovadoPor!: string;

    constructor() {
        super();
    }
}