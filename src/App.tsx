import React, { useState } from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import { Counter } from './onOff/counter';
import OnOff from './onOff/onOff';


function App() {




    return (
        <div className={"App"}>
            <OnOff />

            <Accordion />
            {/*<Accordion title={"Users"} collapsed={true}/>*/}
            <Rating />
            <Counter/>


        </div>

    );
}

type PageTitleType = {
    title: string
}
function PageTitle(props: PageTitleType) {
    console.log("PageTitle rendering")
    return <h1> {props.title}  </h1>
}





export default App;

