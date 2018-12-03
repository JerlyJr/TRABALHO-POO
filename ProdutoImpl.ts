import {Produto} from "./Produto";
export class ProdutoImpl implements Produto{
    private nome : string;
    private descricao: string;
    private preco : number;
    private tempoPrep : number;

    public constructor(nome : string,descricao: string, preco : number, tempoPrep : number){
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.tempoPrep = tempoPrep;
    }
    public getNome(): string{
        return this.nome;
    }
    public setNome(nome : string): void{
        this.nome = nome;
    }
    public getDescricao(): string {
        return this.descricao;
    }
    public setDescricao(value: string) {
        this.descricao = value;
    }
    public getPreco(): number{
        return this.preco;
    }
    public setPreco(preco : number): void{
        this.preco = preco;
    }
    public getTempoPrep(): number{
        return this.tempoPrep;
    }
    public setTempoPrep(tempoPrep: number): void{
        this.tempoPrep = tempoPrep;
    }
}