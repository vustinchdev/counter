import React, { ChangeEvent, useState } from 'react'
import { S } from './SettingsDisplay_Style'

type SettingTypePropsType = {
    maxNum: number
    minNum: number
}

export const SettingType: React.FC<SettingTypePropsType> = (props) => {

    const [min, setMin] = useState(props.minNum)
    const [max, setMax] = useState(props.maxNum)

    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(Number(e.currentTarget.value))
    }
    const onChangeHandlerMin = (e: ChangeEvent<HTMLInputElement>) => {
        setMin(Number(e.currentTarget.value))
    }

    return (
        <S.SettingsDisplay>
            <li>
                <span>max value:</span>
                <S.StyledInput type="number" value={max} onChange={onChangeHandlerMax} />
            </li>
            <li>
                <span>min value:</span>
                <S.StyledInput type="number" value={min} onChange={onChangeHandlerMin} />
            </li>
        </S.SettingsDisplay>
    )
}
