window.addEventListener("load", function(){
    fetch("http://localhost:3000/api/products/latest")
        .then(function(res){
            return res.json()
        })
        .then(latest => {
            let a = document.querySelectorAll("a.linkLatest")
            let img = document.querySelectorAll("img.imgLatest")
            let h2 = document.querySelectorAll("h2.priceLatest")
            let span = document.querySelectorAll("span.discountLatest")
            let p = document.querySelectorAll("p.nameLatest")

            for(let i=0; i<latest.data.length;i++){
               a[i].href = `/products/detail/${latest.data[i].id}`
               img[i].src = `/images/products/${latest.data[i].image}`
               img[i].alt = `${latest.data[i].name}`
               h2[i].innerHTML = `$ ${latest.data[i].price - latest.data[i].price * latest.data[i].discount / 100}`
               if(latest.data[i].discount > 0){
                   span[i].innerHTML = `${ latest.data[i].discount} % OFF`
               }
               p[i].innerHTML = `${latest.data[i].name}`
            }; 
        })
        .catch(error=>{
            console.log(error)
        })

    fetch("http://localhost:3000/api/products/oferts")
    .then(function(res){
        return res.json()
    })
    .then(oferts=>{
        console.log(oferts)
        let a = document.querySelectorAll("a.linkOferts")
        let img = document.querySelectorAll("img.imgOferts")
        let h2 = document.querySelectorAll("h2.priceOferts")
        let span = document.querySelectorAll("span.discountOferts")
        let p = document.querySelectorAll("p.nameOferts")

        for(let i=0; i< oferts.data.length;i++){
           a[i].href = `/products/detail/${oferts.data[i].id}`
           img[i].src = `/images/products/${oferts.data[i].image}`
           img[i].alt = `${oferts.data[i].name}`
           h2[i].innerHTML = `$ ${oferts.data[i].price - oferts.data[i].price * oferts.data[i].discount / 100}`
           if(oferts.data[i].discount > 0){
               span[i].innerHTML = `${ oferts.data[i].discount} % OFF`
           }
           p[i].innerHTML = `${oferts.data[i].name}`
        }; 
    })
    .catch(error=>{
        console.log(error)
    })

})