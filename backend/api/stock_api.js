const Stock = require('../models/stock')
const autoCatch = require('../lib/auto-catch')

module.exports = autoCatch({
  getuserbyid,
  listProducts,
  listProductsbyclient_id,
  createProduct,
  editProduct,
  deleteProduct,
  user_validate
})

async function getuserbyid(req, res, next) {
  // if (!req.isAdmin) return forbidden(next)
  const { id } = req.params
  const user = await Stock.get(id)
  if (!user) return next()
  res.json(user)
}

async function listProducts(req, res, next) {
  const products1 = await Stock.list()
  res.json(products1)
}

async function listProductsbyclient_id(req, res, next) {
  const products1 = await Stock.listbyclient(req.body.client_id)
  res.json(products1)
}

async function createProduct(req, res, next) {
  const user = await Stock.create(req.body)
  res.json(user)
}

async function user_validate(req, res, next) {
  const user = await Stock.user_validate(req.body.mobile_number, req.body.password)
  res.json(user)
}

async function editProduct(req, res, next) {
  const change = req.body
  const user = await Stock.edit(req.params.id, change)
  res.json(user)
}

async function deleteProduct(req, res, next) {
  // if (!req.isAdmin) return forbidden(next)
  await Stock.remove(req.params.id)
  res.json({ success: true })
}

function forbidden(next) {
  const err = new Error('Forbidden')
  err.statusCode = 403
  return next(err)
}
