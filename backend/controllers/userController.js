import validator from "validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js"

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}
// Route for User Login 
const loginUser = async (req, res) => {

    try {
        const {email, password} = req.body

        const user = await userModel.findOne({email})

        if (!user) {
            return res.json({success:false, message: "User doesn't exist"})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = createToken(user._id)
            res.json({success: true, token})
        }
        else {
             res.json({success: false, message : "Incorrect Password"})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// Route For User Registration 
const registerUser = async (req, res) => {

    try {
        const {name, email, password} = req.body

        // checking for existing user
        const exist = await userModel.findOne({email})

        if (exist) {
            return res.json({success:false, message:"User already exist"})
        }

        // validing email and password

        if (!validator.isEmail(email)) {
            return res.json({success : false, message : "Invalid Email"})
        }
        if (password.length < 8) {
            return res.json({success : false, message : "Password must be atleast 8 character long"})
        }

        // hashing userPassword
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // Creating newUser
        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({success:true, token})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// Route for Admin Login

const adminLogin = async (req, res) => {

}

export {loginUser, registerUser, adminLogin}