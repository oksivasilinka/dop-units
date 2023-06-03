import React from 'react';
import './App.css';
import {SuperButton} from "./components/SuperButton";
import {SuperAdidas} from "./components/SuperAdidas";





function App() {

    const tasks = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
    ]

    return (
        <div>
            {/*<SuperButton callBack={()=>{}} color={'red'}/>*/}
            <SuperButton callBack={()=>{}} color={'red'}>red super button</SuperButton>
            <SuperButton callBack={()=>{}}>super button</SuperButton>
            <SuperButton callBack={()=>{}} disabled>disabled super button</SuperButton>
            <SuperAdidas tasks={tasks}/>
            <SuperAdidas tasks={tasks}>
                <SuperButton callBack={()=>{}} color={'red'}>red super button</SuperButton>
                <SuperButton callBack={()=>{}}>super button</SuperButton>
                <input type="text"/>
                <input type="text"/>
                <div>information</div>
                <div>information</div>
                <div>information</div>
                <div>information</div>
                <div>information</div>
                <div>information</div>
                <div>information</div>
                <div>information</div>
            </SuperAdidas>
            <SuperAdidas tasks={tasks}>
                <SuperButton callBack={()=>{}} color={'red'}>red super button</SuperButton>
                <SuperButton callBack={()=>{}}>super button</SuperButton>
                <SuperButton callBack={()=>{}} disabled>disabled super button</SuperButton>
                <div>information</div>
                <div>information</div>
                <div>information</div>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
            </SuperAdidas>
        </div>
    );
}



export default App;
