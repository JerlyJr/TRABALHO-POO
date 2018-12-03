export class Endereco{
    private bairro: string;
    private rua: string;    
    private numeroCasa: string;    
    private complemento: string;

    public constructor(bairro : string, rua : string, numeroCasa : string, complemento : string){
        this.bairro = bairro;
        this.rua = rua;
        this.numeroCasa = numeroCasa;
        this.complemento = complemento;
    }

    public getComplemento(): string {
        return this.complemento;
    }
    public setComplemento(value: string) {
        this.complemento = value;
    }
    public getBairro(): string {
        return this.bairro;
    }
    public setCairro(value: string) {
        this.bairro = value;
    }
    public getRua(): string {
        return this.rua;
    }
    public setRua(value: string) {
        this.rua = value;
    }
    public getNumeroCasa(): string {
        return this.numeroCasa;
    }
    public setNumeroCasa(value: string) {
        this.numeroCasa = value;
    }    
    public definirEndereco(bairro : string, rua : string, numeroCasa : string, complemento : string): void{
        this.bairro = bairro;
        this.rua = rua;
        this.numeroCasa = numeroCasa;
        this.complemento = complemento;
    }
    public verEndereco(): string{
        return this.bairro,this.rua,this.numeroCasa,this.complemento
    }
}