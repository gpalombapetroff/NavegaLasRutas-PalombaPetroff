const items =[
    {id:0,
        nombre:"torta",
        precio:30000,
        stock:15,
        categoria: "torta",
    },
    {id:1,
        nombre:"galletas",
        precio:5000,
        stock:10,
        categoria: "galletas",
    },
    {id:2,
        nombre:"budin",
        precio:1000,
        stock:5,
        categoria: "tortas",
    },
    {id:3,
        nombre:" Alfajor ",
        precio:3000,
        stock:10,
        categoria: "alfajor",
    },
    {id:4,
        nombre:"Mouse",
        precio:3000,
        stock:10,
        categoria: "torta",
    },
    {id:5,
        nombre:"cupcakes",
        precio:3000,
        stock:10,
        categoria: "alfajor",
    },
]

export const getProducts= ()=>{
    return new Promise( (resolve, reject) =>  {
    setTimeout (() => {
        resolve( items)
    }, 3000);
    })
}