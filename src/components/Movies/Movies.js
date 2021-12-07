import React from "react";
import { useEffect, useState } from 'react';
import { connect } from "react-redux";
import Spinner from "../Spinner/Spinner";
import filterMovieList from "../../utility/utility";
import Movie from "../MovieItem/MovieItem";
import './Movies.css'

const Movies = ({ selectedValue, contentItems }) => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        fetchMovies();
    }, [selectedValue])

    const fetchMovies = () => {
        if (selectedValue && Object.keys(selectedValue).length) {
            const list = filterMovieList(selectedValue.value, contentItems);
            setMovieList(list);
        }
    }

    return (<div className="row">{
        movieList.length > 0 ? (movieList.map((url, idx) => <Movie key={idx} url={url}></Movie>)) : <Spinner></Spinner>
    }</div>)
}

const mapStateToProps = ({ content: { contentItems } }) => ({
    contentItems
})

export default connect(mapStateToProps)(Movies)