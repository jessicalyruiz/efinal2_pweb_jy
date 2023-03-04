<template>
  <h2>Ingresar P</h2>

  <div>
    <p>Codigo de Barras</p>
    <input v-model="codigo" type="text" />
    <p>Nombre</p>
    <input v-model="nombre" type="text" />
    <p>Categoria</p>
    <input v-model="categoria" type="text" />
    <p>Stock</p>
    <input v-model="stock" type="text" />
    <p>Precio</p>
    <input v-model="precio" type="text" />

    <button v-on:click="guardar">Guardar</button>
  </div>
</template>

<script>

import {ingresarProductoFachada} from '@/js/api_supermaxi/ProcesarVenta'
export default {

    data(){
        return{
            codigo:null,
            nombre:null,
            categoria:null,
            stock:null,
            precio:null,
        }
    },
    methods:{
        guardar(){
            producto{
                    codigo=this.codigo,
                nombre=this.nombre,
                categoria=this.categoria,
                stock=this.stock,
                precio=this.precio,
            };
                console.log("guaradar")
                ingresarProductoFachada(producto);
        }
    }

}
</script>

<style>
</style>