const addToDb = id =>{
    let shoppingCart = getShoppingCart()


    ///add quantity
    const quantity = shoppingCart[id]

    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity
    }
    else{
         shoppingCart[id] = 1
    }
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
}

const removeToDb = id =>{
    const storedShoppingCart = localStorage.getItem('shoppingCart')
    if(storedShoppingCart){
        const shoppingCart = JSON.parse(storedShoppingCart)
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
        }
    }
}

const getShoppingCart = () =>{
    let shoppingCart = {}
    //get the person cart
    const storedShoppingCart = localStorage.getItem('shoppingCart')
    if(storedShoppingCart){
       shoppingCart = JSON.parse(storedShoppingCart)
    }
    return shoppingCart
}


const removeCart = () =>{
    localStorage.removeItem('shoppingCart')
}

export {addToDb, removeToDb, removeCart, getShoppingCart}