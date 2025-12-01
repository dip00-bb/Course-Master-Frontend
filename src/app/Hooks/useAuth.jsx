"use client"
import { useContext } from "react"
import { AuthContext } from "../Contexts/AuthContext"


const useAuth = () => {
    const authContex = useContext(AuthContext)
    if (!authContex) {
        throw new Error("Wrap children with auth provider")

    } else {
  
        return authContex
    }
}

export default useAuth