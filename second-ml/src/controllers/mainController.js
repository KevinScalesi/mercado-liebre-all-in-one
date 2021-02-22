const fs = require('fs');
const path = require('path');
const math = require('math')
const round = math.round;
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {

	index: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.render('index',{products,toThousand,round});
	},
	search: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let keywords = req.query.keywords;
		let results = [];
		products.forEach(function(product){
			if(-1 != product.description.search(keywords)){
				results.push(product);
			}
			else if(-1 != product.name.search(keywords)){
				results.push(product);
			}
		});
		res.render('results',{results,toThousand,round, keywords});
	},
};

module.exports = controller;
