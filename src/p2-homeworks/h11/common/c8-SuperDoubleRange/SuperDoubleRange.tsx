import React from 'react'
import {Box, Slider} from "@mui/material";
import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (newValue: number | number[]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}


const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        value,
        onChangeRange
    }
) => {
    // сделать самому, можно подключать библиотеки

    let minValue = value ? value[0] : 0
    let maxValue = value ? value[1] : 0

    const handleChange = (event: Event, newValue: number | number[]) => {
        if (onChangeRange) {
            onChangeRange(newValue as number[]);
        }
    };

    return (
        <div className={s.container}>
            <span style={{width: '5px'}}>{minValue}</span>
            <Box className={s.boxStyle} sx={{width: 300}}>
                <Slider
                    value={[minValue, maxValue]}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={100}
                    step={1}
                />
            </Box>
            <span>{maxValue}</span>
        </div>
    );
}

export default SuperDoubleRange
