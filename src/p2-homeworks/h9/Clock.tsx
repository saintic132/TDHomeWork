import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }

    const start = () => {
        stop()
        setDate(new Date)
        const id: number = window.setInterval(() => {
            console.log(id)
            setDate(new Date)
        }, 1000)
        setTimerId(id)

    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    let stringTime,
        stringDate

    if (date) {
        stringTime = date.getHours() + (date.getMinutes() < 10 ? ':0' : ':') + date.getMinutes() + (date.getSeconds() < 10 ? ':0' : ':') + date.getSeconds() // fix with date
        stringDate = (date.getDate() < 10 ? '0' : '') + date.getDate() + '.' + (date.getMonth() < 10 ? '0' : '') + date.getMonth() + '.' + date.getFullYear()// fix with date
    }

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
