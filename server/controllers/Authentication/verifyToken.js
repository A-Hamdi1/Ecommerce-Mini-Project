const jwt = require("jsonwebtoken");
const User = require("../../model/User");
const verifyToken = async (req, res, next) => {
  const AccessToken = req.headers['authorization'].split(' ')[1]
  if (!AccessToken) return res.json({status: 0, message: 'Access token not found!'})
  const userId = jwt.verify(AccessToken, process.env.ACCESS_SECRET_KEY,(err, decoded)=>{
    if(err) return null
    return decoded
  })
  if (!userId) return res.json({status: 2, message: 'Access Token Renewal Needes'})
  return next()
}
module.exports = verifyToken
