const joi = require('joi')
const loginSchema = joi.object({
    password: joi.string().required(),
    email: joi.string().required().email()
})
const validator = data => {
    const { error } = loginSchema.validate(data)
    if (error) return error.details[0].message.replaceAll('"', '')
}
module.exports = validator