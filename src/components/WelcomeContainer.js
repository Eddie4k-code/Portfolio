import HomePicture from "../assets/homepic.png"
import './css/WelcomeContainer.css';
import React, { Component } from 'react'
import Typical from 'react-typical'

import { useEffect, useState } from 'react';

export const WelcomeContainer = () => {

    const [nameIsClicked, setNameIsClicked] = useState(false);
    const [fullName, setFullName] = useState("Edward")

  

    
    return (
        
        <div>

            <div id="pic-container">

                <img src={HomePicture} class="img-fluid" id="homepaper" alt="Responsive image" />

                <h1 className="centered">

                    Hello I Am {< Typical className="typical"
                steps={['Edward', 1500, '   ', 1500, 'Edward']}
                    loop={Infinity}
                    wrapper="div"
            />}

                </h1>
        




               
            </div>

            
     

        </div>
        
        );
}