import User from "../models/user.model.js"
import jwt from 'jsonwebtoken'

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt

        if(!token) {
            return res.status(401).json({message: "Unauthorized"})
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if(!decoded){
            return res.status(401).json({message: "Invalid token"})
        }

        const user = await User.findById(decoded.userId).select("-password")

        if(!user) return res.status(404).json({message: "User not found"})

        req.user = user
        next()
    } catch (error) {
        return res.status(500).json({ message: "Server Error", error: error.message });
    }
}