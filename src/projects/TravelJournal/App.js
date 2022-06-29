import React from "react"
import Card from "./components/Card"
import Header from "./components/Header"

export default function App(){
    return (
        <div className="cards">
            <Header />
            <Card
                location="JAPAN"
                place="Mount Fuji"
                date="12 Jan, 2021 - 24 Jan, 2021"
                imgSrc="https://source.unsplash.com/WLxQvbMyfas"
                description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
            />
            <Card 
                location="AUSTRALIA"
                place="Sydney Opera House"
                date="27 May, 2021 - 8 Jun, 2021"
                imgSrc="https://source.unsplash.com/JmuyB_LibRo"
                description="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
            />
            <Card 
                location="NORWAY"
                place="Geinrangerfjrod"
                date="01 Oct, 2021 - 18 Nov, 2021"
                imgSrc="https://source.unsplash.com/3PeSjpLVtLg"
                description="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
            />
        </div>
    )
}

// Photos from Unsplash
// (can use these URLs as your img src)

// Japan
// https://source.unsplash.com/WLxQvbMyfas

// Australia
// https://source.unsplash.com/JmuyB_LibRo

// Norway
// https://source.unsplash.com/3PeSjpLVtLg