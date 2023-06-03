import React, {ChangeEvent} from "react";

type PropsType = {
    setTitle: (title: string) => void
    title: string
}

export const SuperInput = (props: PropsType) => {


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)

    }

    return (
        <input value={props.title} onChange={onChangeHandler}/>
    )
}
