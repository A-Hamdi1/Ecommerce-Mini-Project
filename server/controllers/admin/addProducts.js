const Product = require('../../model/Products')
const addProducts = async (req, res) => {
    console.log(req.body)
    let data = req.body
    const qty = req.body.qty ? req.body.qty : 1
    const slug = `${req.body.title.replaceAll(' ', '-')}-${req.body.color}-${req.body.size}`
    data = { ...data, qty, slug }
    const addShoe = await new Product(data).save()
    res.send('ok')
}
module.exports = addProducts