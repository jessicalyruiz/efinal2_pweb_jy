import axios from "axios";

//metodos fachada


export const ingresarProductoFachada=async(producto)=>{
    return await ingresarProducto(producto);
}


//metodos 


const ingresarProducto=async(producto)=>{
    axios.post('http://localhost:8081/API/Supermaxi/V1/productos').then(r => r.data)
}




//metdoso

