import React from 'react'
import { S } from "./Scoreboard_Style"

type ScoreboardPropsType = {
    num: number
    maxNum: number
}

export const Scoreboard: React.FC<ScoreboardPropsType> = (props) => {
    return (
        <S.Scoreboard color={props.num === props.maxNum ? 'red' : ''}>{props.num}</S.Scoreboard>
    )
}
