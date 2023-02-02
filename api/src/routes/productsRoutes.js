const { Router } = require ('express');
const {Products, Reviws} = require("../db")

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
            include: Reviws,    
        })  
        let find = products.find(p => p.id === id)  
        res.status(200).send(find)
    } catch (error) {
        console.log(error)
    }
})

router.post('/add', async (req, res, next) => {
    const{name, rating, price, platforms, publishers, stock, genres} = req.body;
    try {
        let newProduct = await Activity.create({
            name,
            rating,
            price,
            platforms,
            publishers,
            stock,
            genres
        })
        
        res.status(200).send(newProduct)

    } catch (error) {
        next(error)
    }
})

module.exports = router;