const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken') 
const User = require('../../model/User')
const validate= require('../../validation/Authentication/register')
const sendRes = (type, text, res) => res.json({ status: type, message: text })

const register = async (req, res) => { 
    const invalid = validate(req.body)
    if (invalid) return sendRes(0, invalid, res)

    const { email, password } = req.body

    const connected = await User.findOne({ email })
    if (connected) return sendRes(0, 'Email already registered', res)

    const hashedPass = await bcrypt.hash (password, 10)
    const saveUser = await new User({ ...req.body, password: hashedPass }).save()

    const RefreshToken = jwt.sign(
        { id: saveUser._id, type: 'r' }, process.env.REFRESH_SECRET_KEY,
        { expiresIn: process.env.REFRESH_EXPIRES_IN }
    )
    const AccessToken = jwt.sign(
        { id: saveUser._id, type: 'a' }, process.env.ACCESS_SECRET_KEY,
        { expiresIn: process.env.ACCESS_EXPIRES_IN }
    )
    const cookieOptions = {
        httpOnly: true,
        path: '/',
        SameSite: 'strict',
        expiresIn: new Date(Date.now() + process.env.REFRESH_EXPIRES_IN * 24 * (60 ** 2) * 1000)
    }

    saveUser.RefreshToken = RefreshToken 
    await saveUser.save()

    res.cookie(process.env.REFRESH_COOKIE_NAME, RefreshToken, cookieOptions) 
    return res.json({ status: 1, message: 'User has been registered', AccessToken})
}
module.exports = register