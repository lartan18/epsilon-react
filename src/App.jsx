import { useState } from 'react'
import './App.css'
import Modal from "./assets/Modal"
import cardData from "./cardData"
import Card from "./assets/Card"
import HeroButton from "./assets/HeroButton"

export default function App() {
    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => setShowModal(!showModal); console.log(showModal)

    const cards = cardData.map((data) => {
        return (
            <Card 
                time={data.time}
                key={data.time}
                title={data.course}
                course={data.course}
                stars={data.stars}
            />
        )
    })

    return (
        <>
            <header id='header'>

            </header>
            <main id='main'>
                <HeroButton handleClick={toggleModal} />
                <section className='carousel'>
                    <h2>Latest events</h2>
                    <div id="card-wrapper">{cards}</div>
                </section>
                {showModal && <Modal />}
            </main>
        </>
    )
}