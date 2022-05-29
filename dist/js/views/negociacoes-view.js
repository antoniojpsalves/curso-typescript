import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr class="">
                    <th>Data:</th>
                    <th>Quantidade:</th>
                    <th>Valor:</th>
                </tr>
            </thead>
            <tbody>
                ${model.listarNegociacoes().map(negociacao => {
            return `
                            <tr>
                                <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                        `;
        }).join('')}
            </tbody>
        </table>
        `;
    }
}
