import {useState} from 'react'
import './Accordion.css'


type AccordionPropsType = {

}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    let [collapsed, setCollpsed] = useState(true)


    return (
        <div>
            <div>
                <AccordionTitle setCollpsed={setCollpsed}
                                collapsed={collapsed}/>
                {!collapsed && <AccordionBody/>}
            </div>
        </div>)

}


type AccordionTitlePropsType = {

    setCollpsed: (collapsed: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={() => {props.setCollpsed(props.collapsed === false)}}>MENU</h3>
    )
}


function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <div>
            <ul> 
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default Accordion