import User from '../models/user.model.js'
export const signup= async (req,res)=>{
    try {
        const {fullName, userName, password, confirmPassword, gender}= req.body;


    } catch (error) {
        
    }
}

export const login= async (req,res)=>{
    res.send("LoginUser")
    console.log('LoginUser');
}

export const logout= async (req,res)=>{
    res.send("LogoutUser")
    console.log('LogoutUser');
}

// export const signup = (req, res) => {
//     console.log('LoginUser');
// }

// export const login = (req, res) => {
//     console.log('LoginUser');
// }

// export const logout= (req, res) => {
//     console.log('LoginUser');
// }