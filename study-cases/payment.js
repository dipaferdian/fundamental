function payment(money){
     
    const list_price = [3000,2000]

    const total = list_price[0] + list_price[1]
    const remainder = money % total


    if(remainder === 0){
        return console.log('pembayaran sesuai')
    }

    if(!list_price.includes(remainder)){
        return console.log('pembayaran tidak sesuai')
    }
}


payment(7500)