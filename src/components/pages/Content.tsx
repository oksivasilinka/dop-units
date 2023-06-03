import React from 'react';
import {useNavigate} from "react-router-dom";

type ContentTypeProps={
    heading:string,
    pages:string
}

export const Content = (props:ContentTypeProps) => {
    const{heading, pages}=props

    const navigate = useNavigate()

    const mainPageHandler = () => {
        navigate('/page/0')
    }
    const comeBackHandler = () => {
        navigate(-1)
    }

    return (
        <div>
            <div>{heading}</div>
            <div>{pages}</div>
            <button onClick={mainPageHandler}>на главную страницу</button>
            <button onClick={comeBackHandler}>назад</button>
        </div>
    );
};

