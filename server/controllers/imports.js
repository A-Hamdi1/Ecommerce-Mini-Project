const register = require('./Authentication/register')  
const login = require('./Authentication/login') 
const renewToken = require('./Authentication/renewToken') 
const verifyToken = require('./Authentication/verifyToken') 
const logout = require('./Authentication/logout') 

module.exports = { register, login, verifyToken , renewToken,logout}