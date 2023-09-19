const jwt = require("jsonwebtoken");
const User = require("../../model/User");
const RenewToken = async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.RefreshToken)
    return res.json({ status: 0, message: "No Cookie Found" });

  const FindUser = await User.findOne({ RefreshToken: cookie.RefreshToken });
  if (!FindUser) {
    jwt.verify(
      cookie.RefreshToken,
      process.env.REFRESH_SECRET_KEY,
      async (err, decoded) => {
        if (err) return;
        const hackedUser = await User.findOne({ _id: decoded.id });
        hackedUser.RefreshToken = [];
        await hackedUser.save();
      }
    );
    res.clearCookie(process.env.REFRESH_COOKIE_NAME);
    return res.json({status: 0, message: 'Invalid Refresh Token'})
  }
  const NewRefreshToken = jwt.sign(
    { id: FindUser._id, type: "r" },
    process.env.REFRESH_SECRET_KEY,
    { expiresIn: process.env.REFRESH_EXPIRES_IN }
  );
  const AccessToken = jwt.sign(
    { id: FindUser._id, type: "a" },
    process.env.ACCESS_SECRET_KEY,
    { expiresIn: process.env.ACCESS_EXPIRES_IN }
  );
  const cookieOptions = {
    httpOnly: true,
    path: "/",
    SameSite: "strict",
    expiresIn: new Date(
      Date.now() + process.env.REFRESH_EXPIRES_IN * 24 * (60 ** 2) * 1000
    ),
  };
  const RefreshToken = cookie.RefreshToken
  const NewRefreshTokenArray = RefreshToken
    ? [
        ...FindUser.RefreshToken.filter((e) => e != RefreshToken),
        NewRefreshToken,
      ]
    : [...FindUser.RefreshToken, NewRefreshToken];

    FindUser.RefreshToken = NewRefreshTokenArray;
  await FindUser.save();
  res.cookie(process.env.REFRESH_COOKIE_NAME, NewRefreshToken, cookieOptions);
  res.json({ status: 1, message: 'Token Renewed', AccessToken ,username:FindUser.username});
};

module.exports = RenewToken;
