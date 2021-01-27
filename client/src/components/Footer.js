import React from 'react'
import { PlayArrow, ArrowLeft, ArrowRight, VolumeUp } from '@material-ui/icons'

import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="info__music">
                <aside className="info__music-imgContainer">
                    <figure>
                        <img className="info__music-img" src="" alt="Img"/>
                    </figure>
                </aside>
                <header className="info__music-content">
                    <h2>Yo perreo sola</h2>
                    <p>Bad Bunny</p>
                </header>
            </div>
            <div className="player">
                <button className="btn btn-back"><ArrowLeft/></button>
                <button className="btn btn-play"><PlayArrow/></button>
                <button className="btn btn-next"><ArrowRight/></button>
            </div>
            {/* <div className="timeline">
                ----_-------____----_------
            </div> */}
            <div className="info__more">
                <p>4:20</p>
                <button className="btn-volume"><VolumeUp/></button>
            </div>
        </footer>
    );
}

export default Footer;