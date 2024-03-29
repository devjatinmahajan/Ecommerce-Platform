//Creating jwt token and storing it in cookies

const sendToken = (user, StatusCode, res) => {
  const token = user.getJWTToken();

  //options for token
  const options = {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res.status(StatusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
