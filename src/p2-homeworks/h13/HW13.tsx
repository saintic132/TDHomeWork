import React, {useState} from "react"
import axios from "axios";
import s from './HW13.module.css'

type ResponseType = {
    errorText: string
    info: string
    yourBody: {
        success: boolean
    }
    yourQuery: {}
}

const api = {
    getCheck(status: boolean) {
        return (
            axios.post<ResponseType>('https://neko-cafe-back.herokuapp.com/auth/test', {success: status})
                .then(res => res.data)
                .catch(err => err.response.data)
        )
    }
}


export function Request() {

    let [checkBoxStatus, setCheckBoxStatus] = useState<boolean>(false);
    let [message, setMessage] = useState<string>();
    let [setError, setSetError] = useState<number | null>(null);
    let [funStatus, setFunStatus] = useState<boolean>(false);
    let [blockButton, setBlockButton] = useState<boolean>(false);

    const changeCheckBoxStatus = () => {
        setBlockButton(true)
        api.getCheck(!checkBoxStatus)
            .then(data => {
                if (data.info.includes('500')) {
                    setSetError(500)
                } else {
                    setSetError(200)
                }
                setFunStatus(false)
                setCheckBoxStatus(data.yourBody.success)
                setMessage(data.errorText)
                setBlockButton(false)
            })
    }

    const errorToFunStatus = () => {
        setFunStatus(true)
        setMessage('Нажми на кнопку button')
    }

    return (
        <div className={s.container}>
            {
                funStatus ?
                    <div style={{color:'purple'}}>
                        {message}
                    </div>
                    :
                    <div className={setError === 200 ? s.textGreen : s.textRed}>
                        {message}
                    </div>
            }

            <div>
                <button onClick={changeCheckBoxStatus} disabled={blockButton}>button</button>
                <span style={{marginLeft:'5px'}}>
                <input type="checkbox" checked={checkBoxStatus} onChange={errorToFunStatus}/>
            </span>
            </div>

        </div>
    )
}

export default Request