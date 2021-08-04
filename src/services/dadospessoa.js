import {http} from './config';

export default {
    listar: () => {
        return http.get('pessoas')
    },

    salvar:(pessoa) => {
        return http.post('pessoas', pessoa)
    },

    alterar:(pessoa) => {
        return http.put('pessoas/' + pessoa.id, pessoa)
    },

    excluir:(pessoa) => {
        return http.delete('pessoas/' + pessoa.id)
    },


}