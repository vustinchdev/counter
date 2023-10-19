import React from 'react'

type ScoreboardPropsType = {
    num: number
}

export const Scoreboard: React.FC<ScoreboardPropsType> = (props) => {
    return (
        <div>{props.num}</div>
    )
}
