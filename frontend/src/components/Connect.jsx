import React from 'react';
import "../connt.css";

const Connect = () => {
    return (
        <div id='connDiv'>

            <h1>Connect with me </h1>

            <ul id='connul'>
                <li>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span class="fa fa-github"></span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span class="fa fa-twitter"></span>
                    </a>
                </li>
               
                <li>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span class="fa fa-linkedin"></span>
                    </a>
                </li>
            </ul>
        </div>

    );
};

export default Connect;
