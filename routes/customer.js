const router = require('express').Router();
const customerController = require('../controllers/customerController');

router.get('/',         customerController.loadCustomers);
router.get('/:id',      customerController.loadCustomer);
router.post('/',        customerController.createCustomer);
router.put('/:id',      customerController.updateCustomer);
router.delete('/:id',   customerController.deleteCustomer);

//router.post('/',    customerController.populateCustomers);

module.exports = router;