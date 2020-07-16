const Phone = require('../models/phones.model')

const getAll = async (req, res, next) => {
  try {
    const phoneList = await Phone.find()
    return res.status(200).json(phoneList)
  } catch (err) {
    next(err)
  }
}

const getPhoneById = async (req, res, next) => {
  try {
    const { id } = req.params
    const phone = await Phone.findById(id)
    return res.status(200).json(phone)
  }
  catch (err) {
    next(err)
  }
}

module.exports = {
  getAll,
  getPhoneById
}

