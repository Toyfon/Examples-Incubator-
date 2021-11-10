


type ButtonType ={
    callBack:()=> void
    name:string

}

export const Button = (props:ButtonType) => {
    const OnClickHandler = () => {
     props.callBack ()
    }
    return <div>
            <button onClick={OnClickHandler}>{props.name}</button>
    </div>
}