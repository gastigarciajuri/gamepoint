const { Router } = require ('express');
const axios = require('axios');
const {Products, Reviews} = require("../db");
const Genres = require('../models/Genres');

const router = new Router();

router.get('/', async (req, res) => {
    try {
        let products = await Products.findAll({
            include: Reviws,
            order: [
                ['name', 'ASC']
            ]
        })
        res.status(200).send(products);
    } catch (error) {
        console.log(error)
    }
})

router.get('/find', async (req, res) => {
    try {
        const {name} = req.query
        let productsDb = await Products.findAll({
            include: Reviws,
            where: {
                name: {
                    [Op.iLike]: "%" + name + "%"
                },
            }
        })
        res.status(200).send(productsDb);
    } catch (err) {
        console.log(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const {id} =req.params
        let products = await Products.findAll({
            include: Reviews,    
        })  
        let find = products.find(p => p.id === id)  
        res.status(200).send(find)
    } catch (error) {
        console.log(error)
    }
})

router.post('/add', async (req, res, next) => {
    const{image, name, rating, price, platforms, publishers, stock} = req.body;
    try {
        let newProduct = await Activity.create({
            name,
            image,
            rating,
            price,
            platforms,
            publishers,
            stock,
        })
        
        res.status(200).send(newProduct)

    } catch (error) {
        next(error)
    }
})

module.exports = router;