<template>
  <pagina titulo="Editar dados da pessoa">
    <form>
      <div class="form-group">
        <label for="name">Nome</label>
        <input type="text" class="form-control" v-model="pessoa.nome"/>
      </div>
      <div class="form-group">
        <label for="name">Sobrenome</label>
        <input type="text" class="form-control" v-model="pessoa.sobrenome"/>
      </div>
      <div class="form-group">
        <label for="name">Idade</label>
        <input type="text" class="form-control" v-model="pessoa.idade"/>
      </div>

      <button type="button" class="btn btn-primary" @click="atualizar">Salvar</button>
    </form>
  </pagina>
</template>

<script>
import dadospessoa from '@/services/dadospessoa';

export default {
  name: "PessoaEdicao",
  data() {
    return {
      pessoa: {
      id: "",  
      nome: "",
      sobrenome: "",
      idade: ""
      }
    };
  },
  mounted(){
    this.pessoa.id = this.$route.params.idPessoa;
    
    fetch(`http://localhost:8082/api/pessoas/${this.pessoa.id}`)
    .then(resp => resp.json().then(json => {
      this.pessoa.nome =  json.nome;
      this.pessoa.sobrenome = json.sobrenome; 
      this.pessoa.idade = json.idade;
    })) 

  },
  methods: {
    atualizar() {
      dadospessoa.alterar(this.pessoa)
      .then(resp => {
        alert(resp.data.nome + " " + resp.data.sobrenome + " atualizado com sucesso!");
        this.$router.push({path: "/"})
      })
      .catch(a => alert(a));
    }
  }
};
</script>

<style></style>
