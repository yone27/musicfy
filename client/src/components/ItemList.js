import React from 'react'
import { Info } from '@material-ui/icons'

import './ItemList.css';

const ItemList = () => {
    return (
        <article className="grid-item card">
            <aside className="card__aside">
                <figure>
                    <img src="/meeti.jpg" className="card__img" alt="Mi Img" />
                </figure>
            </aside>
            <header className="card__header">
                <h3 className="card__title">Title</h3>
                <p>Unknow artist</p>
            </header>
            <footer className="card__action">
                <p className="card__time">4:20</p>
                <button className="card_icon"><Info/></button>
            </footer>
        </article>
    );
}

export default ItemList;