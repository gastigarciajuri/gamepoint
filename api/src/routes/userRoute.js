const { Router } = require ('express');

// import all controllers
// import SessionController from './app/controllers/SessionController';

const router = new Router();

// Add routes
router.get('/', async (req, res) => {
    res.status(200).send('ok');
});
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = router;
