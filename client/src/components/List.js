import React from 'react'

import ItemList from "./ItemList";
import './List.css';

const List = () => {
    return (
        <section className="grid">
            <header className="grid-header">
                <h1 className="title">Musics</h1>
            </header>
            <ItemList/>
            <ItemList/>
            <ItemList/>
            <ItemList/>
            <ItemList/>
            
        </section>
    );
}

export default List;