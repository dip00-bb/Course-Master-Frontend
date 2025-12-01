import { User, UserCredential } from "firebase/auth";
import { Inputs, LoginInputs } from "../Interfaces/RegisterUser";
import axios from "axios";


// register function
export const handleEmailPassReg = async (
    register,
    update,
    setuser,
    dataObj) => {
    try {
        const res = await register(dataObj.email, dataObj.password);

        if (res.user) {
            const user = res.user
            try {
                await update(dataObj.firstName);
                setuser({ ...user, displayName: dataObj.firstName })
                return { user: res.user, success: true }
            } catch (error) {
                throw new Error(String(error))
            }
        }
        return { user: null, success: false }
    } catch (error) {
        throw new Error(String(error))
    }
}




// login function
export const handleEmailPassLogIn = async (
    loginFn,
    dataObj
) => {

    try {
        const result = await loginFn(dataObj.email, dataObj.password);
        if (result.user) {
            return {user:result.user}
        } else {
            throw new Error("Login Failed")
        }
    } catch (error) {
        throw new Error(String(error)) 
    }
}


export const googleLoginFn = async (
    loginFn
)=> {

    try {
        const response = await loginFn()
        if (!response.user) {
            throw new Error("Failed to login with google")
        } else {
            return { user: response.user, success: true }
        }
    } catch (error) {
        throw new Error(String(error))
    }

}
