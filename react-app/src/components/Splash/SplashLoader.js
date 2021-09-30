import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Splash from './Splash';
import { getOurArticles } from '../../store/articles';
import "./splash.css"

function SplashLoader() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOurArticles())
    }, [dispatch])

    const articles = useSelector(state => Object.values(state.articles))

    if (articles.length) {
        return (
            <Splash articles={articles} />
        )
    } else {
        return null;
    }
}

export default SplashLoader;
