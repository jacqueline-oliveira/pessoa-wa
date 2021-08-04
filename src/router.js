import Vue from 'vue';
import VueRouter from 'vue-router';
import PessoaListagem from "@/views/PessoaListagem.vue";
import PessoaCadastro from "@/views/PessoaCadastro.vue";
import PessoaEdicao from "@/views/PessoaEdicao.vue";

Vue.use(VueRouter);

export default new VueRouter({
    base: '/',
    mode: 'history',
    routes: [
        { path: '/', component: PessoaListagem },
        { path: '/pessoa-cadastro', component: PessoaCadastro },
        { path: '/pessoa-edicao/:idPessoa', component: PessoaEdicao }
    ]
});