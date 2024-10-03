import "./card.css"
import Star from "./Star"

export default function Card(props) {

    // const time = new Date(props.time * 1000).toLocaleTimeString("no-NO")
    const time = () => {
        const time = new Date(props.time * 1000).toLocaleTimeString("no-NO", {
            hour: "2-digit",
            minute: "2-digit"
        })
        let day = new Date(props.time * 1000).toLocaleDateString("no-NO", {
            weekday: "short"
        })

        day = day.charAt(0).toUpperCase() + day.replace(".", "").slice(1)

        return `${day} ${time}` 

    }


    return (
        <div className="infocard-wrapper">
            <h4 className="infocard-time">{time(props.time)}</h4>
            <p className="infocard-course">{props.course}</p>
            <Star count={props.stars} key={props.stars} />
        </div>
    )
}