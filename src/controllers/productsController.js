const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const math = require('math')
const round = math.round;
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.render('products',{products,toThousand,round});
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let productDetail = products.find(function(elem){
			return (elem.id == req.params.id)
		});
		if (productDetail){
			res.render('detail',{productDetail,toThousand,round})
		}
		res.render('error')
		
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res,next) => {
		let products = fs.readFileSync(productsFilePath, 'utf-8');
		if(products==""){
			products = [];
		}
		products=JSON.parse(products)
		let newId = products.length + 1; 
		let product = {
			id: newId,
			image: req.files[0].filename,
			...req.body
		}
		products.push(product);
		fs.writeFileSync(productsFilePath,JSON.stringify(products))
		res.redirect('/')
	},

	// Update - Form to edit
	edit: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let productToEdit = products.find(function(product){
			return (product.id == req.params.id)
		});
		if (productToEdit){
			res.render('product-edit-form',{productToEdit,toThousand})
		}
		res.render('error')
	},
	// Update - Method to update
	update: (req, res, next) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		products[(Number(req.params.id)-1)]={
			id: req.params.id,
			image: req.files[0].filename,
			...req.body
		}

		fs.writeFileSync(productsFilePath,JSON.stringify(products))
		res.redirect('/');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		const imagePath = path.join('public/images/products/',products[(Number(req.params.id)-1)].image);
		fs.unlink(imagePath, function (err) {
			if (err) throw err;
			console.log('File deleted!');
		})
		products.splice((Number(req.params.id)-1),1)
		let i=1;
		products.forEach(product=>product.id = i++)
		fs.writeFileSync(productsFilePath,JSON.stringify(products))
		res.redirect('/')
	}
};

module.exports = controller;