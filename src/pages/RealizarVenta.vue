<template>
  <h1>modulo realizar Venta</h1>
  <div>
    <p>numero Venta</p>
    <input v-model="numVenta" type="text" />
    <p>Cedula</p>
    <input v-model="cedula" type="text" />
    <button>Guardar</button>
  </div>
  <p>Codigo Barras</p>
  <input v-model="codigo" type="text" />
  <p>Cantidad</p>
  <input v-model="cantidad" type="text" />
  <button type="button" class="btn btn-outline-success">Agregar</button>

  <u>
    <li v-for="index in productos" :key="index.id">{{ index }}</li>
  </u>

  <div></div>
</template>

<script>
export default {
  data(){
    return{
    productos,
    }
  },
  methods:{

  }
};
</script>

<style>
</style>