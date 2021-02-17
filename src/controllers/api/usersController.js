const {User} = require("../../database/models");

module.exports = {
    total (req,res){
        User.count().then((total)=>{
            let respuesta = {
                meta: {
                    status: 200,
                    url: "/api/users/total"
                },
                data: total
            }
            res.json(respuesta)
        })
    }
}
