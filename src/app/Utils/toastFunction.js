import { showToast } from "nextjs-toast-notify"

export const sucessToast = (message) => {
    showToast.success(message, {
        duration: 5000,
        position: "top-right",
        icon: "",
        sound: true,
    })
}


export const errorToast = (message)=> {
    showToast.error(message, {
        duration: 5000,
        position: "top-right",
        icon: "",
        sound: true,
    })
}