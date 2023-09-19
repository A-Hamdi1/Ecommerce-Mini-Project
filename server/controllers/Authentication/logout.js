const jwt = require('jsonwebtoken');
const User = require('../../model/User');
const logout =async(req,res) =>{
    const cookie = req.cookies
    if(!cookie?.RefreshToken) return res.send('ok')


    const FindUser = await User.findOne({ RefreshToken: cookie.RefreshToken})
    if (!FindUser) {
        jwt.verify(cookie.RefreshToken, process.env.REFRESH_SECRET_KEY, async (err, decoded) => {
            if (err) return
            const hackedUser = await User.findOne({ _id: decoded.id })
            await hackedUser.save()
            hackedUser.RefreshToken = []
        })
        res.clearCookie(process.env.REFRESH_COOKIE_NAME)
        return res.send('ok')    
    }    
    FindUser.RefreshToken = FindUser.RefreshToken.filter(e => e != cookie.RefreshToken)
    await FindUser.save()
    res.clearCookie(process.env.REFRESH_COOKIE_NAME)
    res.send('ok')

}
module.exports=logout