import React from "react"
import axios from "axios";
import {Request} from "./Request";

type ResponseType = {
    errorText: string
    info: string
    yourBody: {
        success: boolean
    }
    yourQuery: {}
}

export const api = {
    getCheck(status: boolean) {
        return (
            axios.post<ResponseType>('https://neko-cafe-back.herokuapp.com/auth/test', {success: status})
                .then(res => res.data)
                .catch(err => err.response.data)
        )
    }
}

function HW13() {
    return (
        <Request />
    )
}

export default HW13