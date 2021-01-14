const { Product, Sequelize, Brand, Category } = require('../../database/models');
const Op = Sequelize.Op;

module.exports = {
    latest (req, res){
        Product.findAll({
			order: [
				['createdAt', 'DESC']
			],
			limit: 8
        })
        .then(function(products){
            let respuesta = {
                meta: {
                    status: 200,
                    count: products.length,
                    url: "/api/products/latest"
                },
                data: products
            }
            res.json(respuesta)
        })
    },
    oferts (req,res){
        Product.findAll({
			where: {
				discount: {
					[Op.gt]: 20
				}
            },
            order: [
				["discount", 'DESC']
			],
            limit: 8
        })
        .then(function(products){
            let respuesta = {
                meta: {
                    status: 200,
                    count: products.length,
                    url: "/api/products/oferts"
                },
                data: products
            }
            res.json(respuesta)
        })
    }
};