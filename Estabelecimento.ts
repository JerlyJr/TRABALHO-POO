import {Usuario} from './Usuario';
import { Pedido } from './Pedido';
import {ProdutoImpl} from "./ProdutoImpl";
class Estabelecimento extends Usuario{
    private cardapio : ProdutoImpl[];
    private taxa : number;
    private reputacao : number;
    private pedidos : Pedido[];

    public constructor(bairro : string, rua : string, numeroCasa : string, complemento : string,
        nome : string, username: string, email: string, senha : string, taxa : number){
            super(bairro,rua,numeroCasa,complemento,nome,username,email,senha)
            this.cardapio = []
            this.taxa = taxa
            this.reputacao = 0
            this.pedidos = []
        }
    public adicionarCardapio(nome : string,descricao: string, preco : number, tempoPrep : number): void{
        this.cardapio.push(new ProdutoImpl(nome,descricao,preco,tempoPrep));
    }
    public removerCardapio(): void{
        this.cardapio.pop();
    }
    public retornarCardapio(): ProdutoImpl[]{
        return this.cardapio
    }

}
