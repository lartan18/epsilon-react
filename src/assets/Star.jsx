import starFilled from "../assets/images/star-filled.png"
import starNofill from "../assets/images/star-nofill.png"

export default function Star(props) {

    let array = []

    for (let i = 0; i < 5; i++) {
        if (i < props.count) {
            array.push(true)
        } else {
            array.push(false)
        }
    }

    return (
        <div className="star-rating">
            {array.map((value) => <img src={value ? starFilled : starNofill} alt="" />)}  
        </div>
    )
}