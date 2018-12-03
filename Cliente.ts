import {Usuario} from './Usuario';
import { Pedido } from './Pedido';
class Cliente extends Usuario{
    private pedidos : Pedido[];

    public constructor(bairro : string, rua : string, numeroCasa : string, complemento : string,
                         nome : string, username: string, email: string, senha : string, pedidos : Pedido[]){
        super(bairro,rua,numeroCasa,complemento,nome,username,email,senha)
    }
    
    
}