<template>
  <pagina titulo="Listagem de pessoas">
    <router-link to="/pessoa-cadastro">Incluir nova pessoa</router-link>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>Pessoa</th>
          <th>Idade</th>
          <th>Ação</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pessoa in pessoas" :key="pessoa.id">
          <td>{{ pessoa.nome + " " + pessoa.sobrenome }}</td>
          <td>{{ pessoa.idade}}</td>
          <td>
            <router-link :to="`/pessoa-edicao/${pessoa.id}`">Editar</router-link>
          </td>
          
          <td>
            <a href="#" v-on:click="excluir(pessoa)">Excluir</a>
          </td>
        </tr>
      </tbody>
    </table>
  </pagina>
</template>

<script>
import dadospessoa from '@/services/dadospessoa';

export default {
  name: "PessoaListagem",
  data() {
    return {
      pessoas: []
    };
  },

  mounted(){
    this.listar();

  },
  methods: {
    listar() {
      dadospessoa.listar().then(resp =>{
         console.log(resp.status);
         this.pessoas = resp.data;
      }).catch(a => alert(a));
    },

    excluir(pessoaExclusao) {
      if(confirm("Deseja excluir o cadastro da pessoa " + pessoaExclusao.nome + " ?")) {
        dadospessoa.excluir(pessoaExclusao)
        .then(resp => {
        console.log(resp)
        this.listar();
        })
      }
  }
}
};
</script>

<style></style>
