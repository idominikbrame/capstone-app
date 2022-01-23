import React, {useEffect, useState} from 'react';
import axios from "axios";
import Podcast from './Podcast'


const Dashboard = () => {
    const [suggestions, setSuggestions] = useState([])


    /*fetch suggestions */
    const getSuggestions = async () => {
        const request = await axios.get('https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=93&page=2&region=us&sort=listen_score&safe_mode=0', {
            headers: {
                'X-ListenAPI-Key': process.env.REACT_APP_PODCAT_TOKEN
            }
        })
        const res = await request.data.podcasts
        console.log(res)
        await setSuggestions(res)
    }

    /* fetch podcast after clicking on suggestion */


    const showPodcastFromID = async (id) => {
        const request = await axios.get(`https://listen-api.listennotes.com/api/v2/podcasts/${id}`, {
            headers: {
                'X-ListenAPI-Key': '549801986ea441f9b1e87e78feb4cac2'
            }
        })
        const res = await request.data.episodes
        if(activePodcasts.includes(id)){
            let removedPodcastList = activePodcasts.filter(item => item != id )
            setActivePodcasts(removedPodcastList)
        } else {
            setActivePodcasts([...activePodcasts, id])
        }

    }

    const [activePodcasts, setActivePodcasts] = useState([])

    useEffect(()  => {
        getSuggestions()
    }, [])
    return (
        <div>
            <h1>Suggestions</h1>
            <ul>
            {suggestions.map((podcast, index) => {
                return (
                    <li key={index} onClick={(event) => showPodcastFromID(podcast.id)}><img src={`${podcast.image}`} alt={`${podcast.title} thumbnail`} />
                        {activePodcasts.includes(podcast.id) ? <Podcast podcast={podcast}/> : <></>}
                    </li>
                )



            })}

            </ul>
        </div>
    );
};

export default Dashboard;