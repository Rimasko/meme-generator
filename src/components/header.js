import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img src="../images/meme.png" alt="header" className="header--logo"/>
            <h1 className="header--title">Meme generator</h1>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}