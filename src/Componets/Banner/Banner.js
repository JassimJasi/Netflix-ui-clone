import React, { useEffect, useState } from 'react';
import {API_KEY,imageUrl} from '../../constants/constants'
import './Banner.css';
import axios from '../../axios';

const Banner = () => {

    const [movie, setMovie] = useState()
    useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      setMovie(response.data.results[Math.floor((Math.random() * 10) + 1)])
    })
    }, [])
    const truncate = (string,n) => {
        return string?.length > n ? string.substr(0,n-1) + '...' : string
    }

    return (
        <div className='banner'
        style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ''})`}}
        >
            <div className='content'>
                <h1 className='title'>
                    {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                <div className='banner_btns'>
                    <button className='button'>Play</button>
                    <button className='button'>MyList</button>
                </div>
                <h1 className='description'>{truncate(movie ? movie?.overview : '',300)}</h1>
            </div>
            <div className="fade"></div>
        </div>
    )
}

export default Banner