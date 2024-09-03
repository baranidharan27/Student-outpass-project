const cuid = require('cuid')

const db = require('../db')
const axios = require('axios')

const User = db.model('Stock', {
  _id: { type: String, default: cuid },
  student_name: { type: String, required: true },
  department: { type: String, required: true },
  mobile_number: { type: String, required: true },
  collage: { type: String, required: true },
  start_date: { type: String, required: true },
  end_date: { type: String, required: true },
  start_time: { type: String, required: true },
  end_time: { type: String, required: true },
  status: { type: String, required: false, default: 'none' },
  client_id: { type: String, required: true },
})

module.exports = {
  get,
  list,
  listbyclient,
  create,
  edit,
  remove,
  get2,
  user_validate,
  model: User
}

async function list() {
  const user = await User.find({})
  return user
}

async function listbyclient(client_id) {
  const user = await User.find({ client_id: client_id })
  return user
}

async function user_validate(id, name) {
  const user = await User.findOne({ mobile_number: id, password: name })
  // console.log(user)
  if (user == null) {
    return { success: false }
  }
  else {  // password: { type: String, required: true},

    return { success: true, data: user }
  }
}


async function get(_id) {
  const product = await User.findById(_id)
  return product
}

async function get2(id) {
  const user = await User.findOne({ mobile_number: id })
  if (user == null) {
    return { success: false }
  }
  else {
    return { success: true, data: user }
  }
}



async function create(fields) {

  // let temp = await get2(fields.student_name)
  // if (temp.success == false) {
  //   const product = await new User(fields).save()
  //   return product
  // }
  // else {
  //   return "customer ID already exist"
  // }
  const product = await new User(fields).save()
  return product
}

async function edit(_id, change) {
  const product = await get({ _id })
  Object.keys(change).forEach(function (key) {
    product[key] = change[key]
  })
  await product.save()
  return product
}

async function remove(_id) {
  await User.deleteOne({ _id })
}

