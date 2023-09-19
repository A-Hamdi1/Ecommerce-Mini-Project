const joi = require('joi')
const registerSchema = joi.object({
    username: joi.string().required().min(5).max(50),
    password: joi.string().required().min(5),
    email: joi.string().required().email()
})
const validator = data => {
    const { error } = registerSchema.validate(data)
    if (error) return error.details[0].message.replaceAll('"', '')
}
module.exports = validator