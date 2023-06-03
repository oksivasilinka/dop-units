import React from "react";

type SuperButtonType = {
    name: string
    callBack: () => void
}

export const SuperButton = (props: SuperButtonType) => {

    const onclickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onclickHandler}>{props.name}</button>
    )
}