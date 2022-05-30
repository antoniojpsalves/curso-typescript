export  abstract class View<T> {

    protected elemento: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {

        const element = document.querySelector(seletor);
        if(element) {
            this.elemento = element as HTMLElement;
        } else {
            throw Error(`O seletor ${seletor} não existe no dom. Verifique a informação`);
        }
        if(escapar)
            this.escapar = escapar;
    }

    public update(model: T): void {
        let template = this.template(model);

        if(this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }


        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}