// necesito que sea exportada porque es una clase

export class ListaItem {
    desc: string;
    completado: boolean;

    constructor(desc: string) {
        this.desc = desc;
        this.completado = false;
    }
}