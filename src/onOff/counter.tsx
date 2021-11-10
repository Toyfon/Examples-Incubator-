import { useState } from "react"
import { Button } from "./button"



export type CounterType ={

}

export const Counter = () => {

    let [counterValue, setCounterValue] = useState(0)


    const onAddClickHandler = () => {
        if (counterValue <= 9){
            setCounterValue(counterValue + 1)
        }
    }
    const resetValue = () => {
            setCounterValue(0)
    }

    return <div>
        <h5>Counter</h5>
        <div><button onClick={onAddClickHandler}>+</button></div>
        <div><button disabled={!counterValue} onClick={resetValue}>сброс</button></div>
        {/*<Button callBack={onAddClickHandler} name={'+'}/>
        <Button callBack={resetValue} name={'СБРОС'}/>*/}
        <span>{counterValue}</span>
    </div>
}