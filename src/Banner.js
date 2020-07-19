import React, {useEffect, useState} from 'react';
import './css/Banner.css';
import axios from './axios';
import urls from './urls';
function Banner() {

const [movie,setmovie]=useState('');


    useEffect(()=>{
        async function getData() {
           let data= await axios.get(urls.fetchTrending);
           var x=Math.floor(Math.random() * (data.data.results.length));

           setmovie(data.data.results[x]);
        }
        getData();
    },[]);


        return (
            <>
                <div className="banner"  style={{ backgroundImage: `url(${movie?process.env.REACT_APP_IMAGE_BASE_URL+movie.backdrop_path||movie.poster_path:''})`}} >
                    <div className="layer">
                        <h1>{movie.title||movie.original_title||""}</h1>
                        <div className="buttons" >
                            <button>Play</button>
                            <button>My List</button>
                        </div>
                        <p>{movie.overview}</p>
                        <div className="bottom"></div>
                    </div>

                </div>
            </>
        );

}



export default Banner;