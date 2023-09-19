const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../model/User');
const validate = require('../../validation/Authentication/login');

const login = async (req, res) => {
    console.log('data')
    const invalid = validate(req.body)
    if (invalid) { return res.json({ status: 0, message: invalid }) }

    const { email, password } = req.body;
    const connected = await User.findOne({ email })

    if (!connected || !await bcrypt.compare(password, connected.password)) {
        return res.json({ status: 0, message: 'Email or Password is incorrect' })
    }
    const cookie = req.cookies
    const RefreshToken = cookie.RefreshToken
    if (cookie?.refreshtoken) {
        const FindCookieUser = await User.findOne({ RefreshToken })
        if (!FindCookieUser) {
            jwt.verify(RefreshToken, process.env.REFRESH_SECRET_KEY, async (err, decoded) => {
                if (err) return
                const hackedUser = await User.findOne({ _id: decoded.id })
                await hackedUser.save()
                hackedUser.RefreshToken = []
            })
        }
        res.clearCookie(process.env.REFRESH_COOKIE_NAME)
    }
    const NewRefreshToken = jwt.sign(
        { id: connected._id, type: 'r' },
        process.env.REFRESH_SECRET_KEY,
        { expiresIn: process.env.REFRESH_EXPIRES_IN }
    )
    const AccessToken = jwt.sign(
        { id: connected._id, type: 'a' }, process.env.ACCESS_SECRET_KEY,
        { expiresIn: process.env.ACCESS_EXPIRES_IN }
    )
    const cookieOptions = {
        httpOnly: true,
        path: '/',
        SameSite: 'strict',
        expiresIn: new Date(Date.now() + process.env.REFRESH_EXPIRES_IN * 24 * (60 ** 2) * 1000)
    }

    const NewRefreshTokenArray = RefreshToken ?
        [...connected.RefreshToken.filter(e => e != RefreshToken), NewRefreshToken] :
        [...connected.RefreshToken, NewRefreshToken]

    connected.RefreshToken = NewRefreshTokenArray
    await connected.save()

    res.cookie(process.env.REFRESH_COOKIE_NAME, NewRefreshToken, cookieOptions) 
    return res.json({ status: 1, message: 'User has been logged In', AccessToken,username:connected.username })
}
module.exports = login