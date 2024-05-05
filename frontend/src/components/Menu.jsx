import React from 'react'
import "../App.css";
import { Link } from 'react-router-dom';

const Menu = () => {
    return (

        <div>
            <div>
                <a href="/"> <img src="/crossIcon.png" alt="Cross" class="cross"></img></a>

            </div>
            <nav class="navB">
                <ul>
                    <Link class="line anim-typewriter" to="front" spy={true} smooth>Home</Link>
                    <Link class="line anim-typewriter" to="intro" spy={true} smooth>Introduction</Link>
                    <Link class="line anim-typewriter" to="skills" spy={true} smooth>Skills</Link>
                    <Link class="line anim-typewriter" to="Achievements" spy={true} smooth> Achievements</Link>
                    <Link class="line anim-typewriter" to="projects" spy={true} smooth> Projects</Link>
                    <Link class="line anim-typewriter" to="connect" spy={true} smooth>Connect</Link>

                </ul>  
            </nav>
        </div>

    )
}

export default Menu;