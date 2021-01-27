import React, { useState } from "react";
import { SearchOutlined } from '@material-ui/icons'

import './Search.css';

const Search = () => {
    const [search, setSearch] = useState('')
    const [musics, setMusics] = useState({})
    const handleSearch = async () => {
        // console.log(`/search?q=${search}`);
        try {
            const res = await fetch(`/search?q=${search}`, {
                method: 'GET'
            })
            const data = await res.json()
            setMusics({
                ...musics,
                data
            })
            console.log(data);
        } catch (error) {
            console.log(error);

        }
    }


    // leer los datos del formulario
    const changeState = e => {
        // almacenando lo que el usuario escribe en el state
        setSearch(e.target.value)
    }
    return (
        <aside className="searh">
            <button className="search__icon" onClick={handleSearch}><SearchOutlined/></button>
            <input className="search__input" type="text" placeholder="Search for songs, artist..." onChange={changeState} />
            <h1 className="namePage">
                Music <span>Fy</span>
            </h1>
        </aside>
    );
}

export default Search;