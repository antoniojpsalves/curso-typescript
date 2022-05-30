export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const element = document.querySelector(seletor);
        if (element) {
            this.elemento = element;
        }
        else {
            throw Error(`O seletor ${seletor} não existe no dom. Verifique a informação`);
        }
        if (escapar)
            this.escapar = escapar;
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
