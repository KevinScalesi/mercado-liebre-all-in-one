const { Product, Sequelize, Brand, Category } = require('../../database/models');
const category = require('../../database/models/category');
const product = require('../../database/models/product');
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
    },
    categories (req,res){
        Product.findAll({
            include: [{association: "category"}]
        })
        .then(products=>{
            if(req.params.category != undefined){
                 products = products.filter(product => product.category.name == req.params.category)
            }
            let respuesta = {
                meta: {
                    status: 200,
                    count: products.length,
                    url: "/api/products/categories/" + req.params.category
                },
                data: products
            }
            res.json(respuesta)
        })
    },
    amount (req,res){
        Product.sum('price').then(total => {
            let respuesta = {
                meta: {
                    status: 200,
                    url: "/api/products/amount"
                },
                data: `$${total}` 
            }
            res.json(respuesta)
        })
    },
    total (req,res){
        Product.count().then(total=>{
            let respuesta = {
                meta: {
                    status: 200,
                    url: "/api/products/amount"
                },
                data: total 
            }
            res.json(respuesta)
        })
    } 
};