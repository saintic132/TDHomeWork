import React, {useCallback, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(100)

    const onChangeRange = useCallback((newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            setValue1(newValue[0])
            setValue2(newValue[1])
        }
    }, [setValue1, setValue2])

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={setValue1}
                    // сделать так чтоб value1 изменялось
                />
            </div>
            <hr/>
            <div>
                <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeRange={onChangeRange}
                    // сделать так чтоб value1 и value2 изменялось
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
