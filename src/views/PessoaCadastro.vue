<template>
  <pagina titulo="Adicionar nova pessoa">
    <form>
      <div class="form-group">
        <label for="name">Nome</label>
        <input type="text" class="form-control" v-model="pessoa.nome" @change="$v.pessoa.nome.$touch()"/>
        <p class="error" v-if="$v.pessoa.nome.$error">*Campo nome requerido para inclusão</p>
        <p class="error" v-if="$v.pessoa.nome.$error && pessoa.nome.length < 5">*Campo nome deve ter pelo menos 5 caracteres</p>
      </div>
      <div class="form-group">
        <label for="name">Sobrenome</label>
        <input type="text" class="form-control" v-model="pessoa.sobrenome" @change="$v.pessoa.sobrenome.$touch()" />
        <p class="error" v-if="$v.pessoa.sobrenome.$error">*Campo sobrenome requerido para inclusão</p>
      </div>

       <div class="form-group">
        <label for="name">Idade</label>
        <input type="text" class="form-control" v-model="pessoa.idade" @change="$v.pessoa.idade.$touch()" />
        <p class="error" v-if="$v.pessoa.idade.$error">*Campo idade requerido para inclusão</p>
      </div>
     
     
      <button type="button" class="btn btn-primary" v-on:click="salvar">Salvar</button>
      <br/>
      <br/>
      <router-link to="/">Voltar</router-link>
    </form>
  </pagina>
</template>

<script>
import dadospessoa from '@/services/dadospessoa'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: "PessoaCadastro",
  data() {
    return {
      pessoa: {
      nome: "",
      sobrenome: "",
      idade: ""}
    };
  },

  validations: {
    pessoa: {
      nome: { required,
      minLenght: minLength(5) },
      sobrenome: { required },
      idade: {required}
      }
    },

  methods: {
    salvar(){

      if (!this.$v.$invalid){
      dadospessoa.salvar(this.pessoa)
      .then(resp => {
         alert(resp.data.nome + " salvo com sucesso!");
         this.$router.go(0);

      })        
    } else {
      this.$v.$touch();
    }
    }

   
  }
};
</script>

<style scoped>
 .error {
   color: red;
 }
</style>
