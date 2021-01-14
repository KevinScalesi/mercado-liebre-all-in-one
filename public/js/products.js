window.addEventListener("load", function(){
    fetch("http://localhost:3000/api/products/latest")
        .then(function(res){
            return res.json()
        })
        .then(latest => {
            let ultimos = document.querySelectorAll("section.product-box")
            for(let i=0; i<latest.data.length;i++){
                ultimos[i].firstElementChild.href = `/products/detail/${latest.data[i].id}`
                ultimos[i].firstElementChild.firstElementChild.firstElementChild.src = `/images/products/${latest.data[i].image}`
                ultimos[i].firstElementChild.firstElementChild.firstElementChild.alt = `${latest.data[i].name}`
            };
            // let a = document.querySelectorAll("a.prodId")
            // let img = document.querySelectorAll("img.imgProd")
            
           console.log(ultimos)   
               
            //         ultimos.h2.innerHTML = `$${helpers.trunc(product.price - product.price * product.discount / 100)}`
            //         ultimos.span.innerHTML = `${ product.discount} % OFF`
            //         ultimos.p.innerHTML = `${product.name}`
            //     });
            // }
            console.log(latest.data)
        })
        .catch(error=>{
            console.log(error)
        })
})