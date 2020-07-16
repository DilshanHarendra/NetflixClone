import React, {useEffect, useState} from 'react';
import './css/MovieRow.css';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import axios from './axios';

function MovieRow({title,url,originals}){


    var x=0;
    var startAnimate=false;
    const [trailerUrl,settrailerUrl] =useState('');
    const [movies,setmovies] =useState([]);


    useEffect(()=>{

        async function getData(){
            let data=await axios.get(url);
            setmovies(data.data.results);
            startAnimate=true;
        }
        getData();



    },[url]);


    setTimeout(()=>{
        setInterval(()=>{
            if (startAnimate){
                var row = document.getElementById(title);
                if(x<(row.scrollWidth- row.offsetWidth)){
                    row.scrollLeft=x;
                    x+=0.5;
                }else{
                    x=0;
                }
            }

            },20)
    },5000);



    function playTrailer(movie){

        if (trailerUrl){
            settrailerUrl('')
        }else{
            movieTrailer(movie?.name||"").then(url=>{
                const params =new URLSearchParams(new URL(url).search);
                settrailerUrl(params.get('v'));

            }).catch(err=>{});
        }

    }
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };
    const style={
        height:350,
        maxHeight:350
    }
        return (
            <div className="movieRow">
                <h1>
                    {title}
                </h1>

                <div className="row" id={title}   >
                    {movies.map(movie=>(
                        <img key={movie.id}
                             onClick={()=>playTrailer(movie)}
                             style={originals?style:{}}
                             src={originals?process.env.REACT_APP_IMAGE_BASE_URL+movie.poster_path : process.env.REACT_APP_IMAGE_BASE_URL+movie.backdrop_path}
                             alt={movie.title}/>
                    ))}
                </div>
                {trailerUrl && <YouTube  opts={opts} videoId={trailerUrl} />}

            </div>
        );

}



export default MovieRow;