import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";

const ShortenURlPage = () => {
    const {url} = useParams();

    const backendUrl = "http://localhost:8080";

    useEffect(() => {
        if (url){
            window.location.href = backendUrl + "/" + url;
        }
    }, [url])

    return null;
}
export default ShortenURlPage
