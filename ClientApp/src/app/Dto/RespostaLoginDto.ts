import { LoginGeradoDto } from "./LoginGeradoDto";
import { ObjetoRespostaBaseDto } from "./ObjetoRespostaBaseDto";

export class RespostaLoginDto extends ObjetoRespostaBaseDto {
    public loginGerado!: LoginGeradoDto;

    constructor() {
        super();
        this.loginGerado = new LoginGeradoDto();
    }
}
