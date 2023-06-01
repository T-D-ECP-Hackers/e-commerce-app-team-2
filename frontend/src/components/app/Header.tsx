import React from 'react';
import NavigationBar from "./NavigationBar";
import {goToHomePage} from "../../functions/navigation";
import {useNavigate} from "react-router-dom";
import imageToAdd from "../../assets/dino-dog-png.png"

// TODO - Task 1: Please name me

function Header() {
    const navigate = useNavigate();
    return (
        <div className="page-header">
            <div className="header-1">
                <img className="logo" src={imageToAdd} onClick={() => goToHomePage(navigate)} alt='DinoDog Mascot Logo for Jurassic Bark'></img>
                <div>
                    <h1 onClick={() => goToHomePage(navigate)}>Jurassic Bark </h1>
                </div>
            </div>
            <NavigationBar/>
        </div>
    );
}

export default Header;