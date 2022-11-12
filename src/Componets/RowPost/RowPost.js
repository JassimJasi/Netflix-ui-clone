import React, { useEffect, useState } from 'react';
import './RowPost.css';
import axios from '../../axios';
import { imageUrl, API_KEY } from '../../constants/constants';
import YouTube from 'react-youtube';

const RowPost = (props) => {

    const [movies, setMovies] = useState([]);
    const [urlId, setUrlId] = useState("")

    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovies(response.data.results)
        })
        // eslint-disable-next-line
    }, [])
    //youtube
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleMovieTrailer = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
            } else {
                console.log("404 error - 'Trailer not found'");
            }
        })
    };

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj) =>
                    <img onClick={() => handleMovieTrailer(obj.id)} className={props.isSmall ? 'smallPoster' : 'posterImg'} src={props.isSmall ? `${movies ? imageUrl + obj.backdrop_path : ""}` : `${movies ? imageUrl + obj.poster_path : ""}`}
                        alt="poster Img" />
                )}

            </div>
            {urlId && <YouTube videoId={urlId.key} opts={opts} />}
        </div>
    )
}

export default RowPost