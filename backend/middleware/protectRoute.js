import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    // const token = req.headers.authorization?.split(" ")[1];
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized Token" });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    if (!decode) {
      return res.status(401).json({ message: "Unauthorized Decode" });
    }

    const user = await User.findById(decode.userid).select("-password");

    if (!user) {
      return res.status(401).json({ message: "Unauthorized User" });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.error("Error in controller protectRoute ", error);
  }
};

export default protectRoute;
