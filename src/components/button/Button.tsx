import React from 'react'

type ButtonPropsType = {
    name: string
    disabled?: boolean
    onClick: () => void
}

export const Button: React.FC<ButtonPropsType> = (props) => {

    const onClickHandler = () => {
        props.onClick()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}
