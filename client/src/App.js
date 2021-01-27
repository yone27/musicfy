import React, { useEffect, useState } from "react";
import { ArrowForwardIos, ArrowBackIos } from '@material-ui/icons'

import List from "./components/List";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import './App.css'; 

const App = () => {
    const [token, setToken] = useState();
    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const _token = hash.access_token;
    
        if (_token) {
          setToken(_token);
        }
    
        console.log("token", token);
      }, []);

    return (
        <>
            <main className="section">
                {token ? <h1>Logged in</h1> : <Login />}
                {/* <Search />
                <List />
                <footer class="pagination">
                    <button><ArrowBackIos/></button>
                    <button><ArrowForwardIos/></button>
                </footer> */}
            </main>
            <Footer />
        </>
    );
}

export default App;
