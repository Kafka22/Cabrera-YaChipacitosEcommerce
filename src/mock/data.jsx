const products = [
    {
        id: "01",
        name: "chipa clasica",
        price: 450,
        category: "mas vendido",
        descripcion: "tamaño medio - 35grs",
        stock: 10,
        img: "/imagenes/clasicas.jpg"
    },
    {
        id: "02",
        name: "chipanwich",
        price: 7000,
        category: "mas vendido",
        descripcion: "de jamon y queso",
        stock: 8,
        img: "/imagenes/chipanwich.jpg"
    },
    {
        id: "03",
        name: "chipanwich",
        price: 450,
        category: "mas vendido",
        descripcion: "salame y queso",
        stock: 15,
        img: "/imagenes/chipanwich2.jpg"
    },
    {
        id: "04",
        name: "sorteo - smothies",
        price: 7000,
        category: "sorteos",
        descripcion: "frutales",
        stock: 11,
        img: "/imagenes/sorteo.jpg"
    }
]

//CREAMOS Y EXPORTAMOS LA PROMESA
export const getProducts = () =>{
    let error = false;
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            if(!error){
                resolve(products)
            }else{
                reject("hubo un error, intente mas tarde")
            }
        }, 5000)
    })
}

//un item
export const getOneProduct = (id)=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            // version hardcodeada
            // resolve(products[2])
            //version dinamica
            let prod = products.find((item)=> item.id === id);
            resolve(prod)
        }, 2000)
    })
}
