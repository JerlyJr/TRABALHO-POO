export interface Produto{
    getNome(): string; // retona o nome do produto
    setNome(nome : string): void; // edita o nome do produto
    getPreco(): number; // retorna o preco do produto
    setPreco(preco : number): void; // edita o preco do produto
    getTempoPrep(): number;// retorna o tempo de preparo
    setTempoPrep(tempoPrep: number): void; // edita o tempo de preparo
}