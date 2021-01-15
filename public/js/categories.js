window.addEventListener("load", function(){
    fetch("http://localhost:3000/api"+window.location.pathname)
        .then(function(res){
            return res.json()
        })
        .then(products => {
            let section = document.querySelectorAll("section.product-box")
            let a = document.querySelectorAll("a.linkCategory")
            console.log(a)
            let img = document.querySelectorAll("img.imgCategory")
            let h2 = document.querySelectorAll("h2.priceCategory")
            let span = document.querySelectorAll("span.discountCategory")
            let p = document.querySelectorAll("p.nameCategory")
            for(i=0 ; i < (section.length - products.data.length); i++){
                section[i].innerHTML = ""
            }
            for (i=0; i < products.data.length; i++) {
                a[i].href = `/products/detail/${products.data[i].id}`
                img[i].src = `/images/products/${products.data[i].image}`
                img[i].alt = `${products.data[i].name}`
                h2[i].innerHTML = `$ ${products.data[i].price - products.data[i].price * products.data[i].discount / 100}`
                if(products.data[i].discount > 0){
                span[i].innerHTML = `${ products.data[i].discount} % OFF`
                }
                p[i].innerHTML = `${latest.data[i].name}`
            }
        })
        .catch(error=>{
            console.log(error)
        })

})