import jwt from "jsonwebtoken";

const generateTokenandSetCookie = (userid, res) => {
  const token = jwt.sign({ userid }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, //prevent xss atttacks
    sameSite: "strict", //csrf attacks
    secure: process.env.NODE_ENV !== "development",
  });

  // console.log("Token Generated");
};

export default generateTokenandSetCookie;
