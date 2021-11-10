import { useState } from "react"


type RatingPropsType = {
    //value: 0|1|2|3|4|5
}

export function Rating(props: RatingPropsType) {

    const [value, setValue] = useState(0)


    return (
        <div>
            <Star value={value > 0} setValue={() => setValue(1)}/>
            <Star value={value > 1}  setValue={() => setValue(2)}/>
            <Star value={value > 2}  setValue={() => setValue(3)}/>
            <Star value={value > 3}  setValue={() => setValue(4)}/>
            <Star value={value > 4}  setValue={() => setValue(5)}/>
        </div>
    )
}



type StarPropsType ={
    value: boolean
    setValue: () => void

}
function Star(props: StarPropsType) {

  return <span onClick={ ()=> { props.setValue() } }> { props.value ? <b> Star </b> : 'Star' } </span>
}