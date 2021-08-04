<template>
  <div>
    <h4>
      {{ titulo }}
    </h4>
    <div class="card-body">
      <p class="card-text">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagina",
  props: {
    titulo: String
  }
}
</script>

<style>

</style>