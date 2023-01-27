import React from "react"
import Navbar from "./Components/Navbar"
import Card from "./Components/Card"
import data from "./data"

export default function App() {
    
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                title={item.title}
                location={item.location}
                googleMapsUrl={item.googleMapsUrl}
                startDate={item.startDate}
                endDate={item.endDate}
                desc={item.description}
                img={item.image}
            />
        )
    })
    return (
        <div className="overview">
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
            
        </div>
    )
}
