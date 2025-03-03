export const products = [
    {
        name: "chipanwich",
        price: 7000,
        category: "menu",
        descripcion: "de jamon y queso",
        stock: 8,
        img: "/imagenes/chipanwich.jpg"
    },
    {
        name: "chipanwich",
        price: 450,
        category: "merch",
        descripcion: "salame y queso",
        stock: 15,
        img: "/imagenes/chipanwich2.jpg"
    },
    {
        name: "sorteo - smothies",
        price: 7000,
        category: "promociones",
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
        }, 2000)
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
