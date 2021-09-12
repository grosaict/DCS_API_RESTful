const Customer = require('../models/Customer');


/* exports.populateCustomers = async (req, res) => {
    custArray = [
        new Customer({ "name" : "customer1", "email" : "cust1@testdomain.com" }),
        new Customer({ "name" : "customer2", "email" : "cust2@testdomain.com" }),
        new Customer({ "name" : "customer3", "email" : "cust3@testdomain.com" }),
        new Customer({ "name" : "customer4", "email" : "cust4@testdomain.com" }),
        new Customer({ "name" : "customer5", "email" : "cust5@testdomain.com" })
    ]

    try {
        custArray.forEach( async (cust) => {
            await cust.save();
        });
        res.status(200).json({ status: 200, message: "BD clientes populado com sucesso"});
    } catch (err){
        console.log("populateCustomers > err >>>")
        console.log(err)
        res.status(400).send({ status: 400, message: "Erro ao popular clientes"});
    }
} */

exports.loadCustomers = async (req, res) => {
    try {
        let customers = await Customer.find().sort({name: 'asc'}).exec();
        res.status(200).json({ status: 200, data: customers});
    } catch (err){
        console.log("loadCustomers > err >>>")
        console.log(err)
        res.status(400).send({ status: 400, message: "Erro ao buscar clientes"});
    }
}

exports.loadCustomer = async (req, res) => {
    try {
        const customerId = req.params.id;
        let customer = await Customer.findOne({_id: customerId}).exec();
        res.status(200).json({ status: 200, data:customer});
    } catch (err){
        console.log("loadCustomer > err >>>")
        console.log(err)
        res.status(400).send({ status: 400, message: "Erro ao buscar cliente"});
    }
}

exports.createCustomer = async (req, res) => {
    try {
        const { name, email }   = req.body;

        const nameUpper         = name.toUpperCase()
        const emailLower        = email.toLowerCase()

        const newCustomer       = new Customer({
            name:   nameUpper,
            email:  emailLower
        });
        await newCustomer.save();
        res.status(200).json({ status: 200, message: "Cliente cadastrado com sucesso"});
    } catch (err){
        console.log("createCustomer > err >>>")
        console.log(err)
        res.status(400).send({ status: 400, message: "Erro ao cadastrar cliente"});
    }
}

exports.updateCustomer = async (req, res) => {
    try {
        const { name, email }   = req.body;

        const nameUpper         = name.toUpperCase()
        const emailLower        = email.toLowerCase()

        const filter            = req.params.id; //customerId
        const body              = {
            name:   nameUpper,
            email:  emailLower
        }
        await Customer.findOneAndUpdate(filter, body).exec();
        res.status(200).json({ status: 200, message: "Cliente atualizado com sucesso"});
    } catch (err){
        console.log("updateCustomer > err >>>")
        console.log(err)
        res.status(400).send({ status: 400, message: "Erro ao atualizar cliente"});
    }
}

exports.deleteCustomer= async (req, res) => {
    try {
        const filter            = req.params.id; //customerId
        await Customer.findOneAndDelete(filter);
        res.status(200).json({ status: 200, message: "Cliente excluído com sucesso"});
    } catch (err){
        console.log("deleteCustomer > err >>>")
        console.log(err)
        res.status(400).send({ status: 400, message: "Erro ao excluir cliente"});
    }
}