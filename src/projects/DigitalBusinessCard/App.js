import React from "react"
import CardHeader from "./components/CardHeader"
import CardContent from "./components/CardContent"
import CardSocialMedia from "./components/CardSocialMedia"

export default function App(){
    return (
        <div className="card-bg">
            <div className="card">
                <CardHeader />
                <CardContent />
                <CardSocialMedia />
            </div>
        </div>
        
    )
}