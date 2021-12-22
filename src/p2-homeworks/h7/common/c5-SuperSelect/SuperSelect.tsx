import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: JSX.Element[] | undefined = options?.map((el, i) => {
        debugger
        return (
            <option
                className={restProps.value == i ? s.hoverElement : ''}
                key={i}
                value={String(i)}
            >{el}</option>
        )
    }); // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        let newOption = e.currentTarget.value
        if (onChangeOption && newOption) {
            onChangeOption(newOption)
        }
    }
    // onChange, onChangeOption

    return (
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
