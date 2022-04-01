import Users from "../models/user";
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    console.log(req.body);
    const {fullname,email, password} = req.body
    try {
        const exitUser = await Users.findOne({email}).exec();
        if(exitUser) {
            res.status(400).json({
                messages: "Tai khoan da ton tai"
            })
        }

        const user = await new Users({fullname, email, password}).save();
        res.json({
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email
            }
        })
    } catch (error) {
        res.status(400).json({
            error: "Khong dang ky duoc"
        })
    }
}

export const login = async (req, res) => {
    console.log(req.body);
    const {email, password} = req.body
    try {
        const user = await Users.findOne({email}).exec();
        if(!user) {
            res.status(400).json({
                messages: "Email không tồn tại"
            })
        }
        if(!user.authenticate(password)){
            res.status(400).json({
                messages: "Mật khẩu không đúng"
            })
        }
        const token = jwt.sign({_id: user._id}, "123456", { expiresIn: '1h'})
        res.json({
            token,
            user: {
                _id: user._id,
                email: user.email,
                fullname: user.fullname
            }
        });
    } catch (error) {
        res.status(400).json({
            error: "Dang nhap that bai"
        })
    }
}