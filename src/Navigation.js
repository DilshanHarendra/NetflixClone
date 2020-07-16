import React from 'react';
import './css/Navbar.css';

function Navigation() {




        window.addEventListener("scroll",()=>{
            var navbar= document.getElementById('navbar');
            var h=navbar.offsetHeight;
            if(window.pageYOffset>=h){
                navbar.setAttribute("class","nav sticky");
            }else{
                navbar.setAttribute("class","nav");
            }
        });





        return (
            <div id="navbar" className="nav">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="logo"/>

                <img className="avatar" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="avatar"/>
            </div>
        );

}


export default Navigation;