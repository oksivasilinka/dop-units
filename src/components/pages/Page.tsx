import React from "react";
import {PagesType} from "../../dataState/dataState";
import {useParams} from "react-router-dom";

type PropsType = {
    pages: PagesType[]
}

export const Page = (props: PropsType) => {

    const params=useParams()
    console.log(params.id)
    console.log(props.pages[Number(params.id)])

    return (
        <div>
            <div>{props.pages[Number(params.id)].heading}</div>
            <div>{props.pages[Number(params.id)].about}</div>
        </div>
    )
}