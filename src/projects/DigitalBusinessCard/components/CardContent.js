import React from "react"

export default function CardContent(){
    return (
        <div className="main--content">
            <h3 className="laura--name">Laura Smith</h3>
            <p className="job--role">Frontend Developer</p>
            <p className="website">laurasmith.website</p>
            <div className="btns">
                <button className="btn email--btn">
                    <i className="fa-solid fa-envelope"></i>Email
                </button>
                <button className="btn linkedin--btn">
                    <i className="fa-brands fa-linkedin"></i>LinkedIn
                </button>
            </div>
            <div className="desc--content top--margin">
                <h4 className="desc--header">About</h4>
                <p className="desc--para">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            <div className="desc--content bottom--margin">
                <h4 className="desc--header">Interest</h4>
                <p className="desc--para">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>

    )
}