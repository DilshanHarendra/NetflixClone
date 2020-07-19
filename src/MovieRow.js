import React, {useEffect, useState} from 'react';
import './css/MovieRow.css';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import axios from './axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
function MovieRow({title,url,originals}){



    const [trailerUrl,settrailerUrl] =useState('');
    const [movies,setmovies] =useState([]);


    useEffect(()=>{

        async function getData(){
            let data=await axios.get(url);
            setmovies(data.data.results);

        }
        getData();



    },[url]);






    function playTrailer(movie){

        if (trailerUrl){
            settrailerUrl('')
        }else{
            movieTrailer(movie?.name||movie?.original_title||"").then(url=>{
                const params =new URLSearchParams(new URL(url).search);
                settrailerUrl(params.get('v'));

            }).catch(err=>{});
        }

    }
    const opts = {
        height: '500',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };
    const style={
        height:350,
        maxHeight:350,
        width: 250
    }
        return (
            <div className="movieRow">
                <h1>
                    {title}
                </h1>

                <div className="row" id={title}   >

                    <Swiper
                        spaceBetween={20}
                        slidesPerView={5}
                        slidesPerGroup={2}


                    >
                        {movies.map(movie=>(
                            <SwiperSlide
                                key={movie.id}
                            style={{marginRight:'5px !important'}}
                            >
                            <img
                                 onClick={()=>playTrailer(movie)}
                                 style={originals?style:{}}
                                 src={originals?process.env.REACT_APP_IMAGE_BASE_URL+movie.poster_path : process.env.REACT_APP_IMAGE_BASE_URL+movie.backdrop_path}
                                 alt={movie.title}/>
                            </SwiperSlide>
                        ))}




                    </Swiper>


                </div>
                {trailerUrl && <YouTube  opts={opts} videoId={trailerUrl} />}

            </div>
        );

}



export default MovieRow;