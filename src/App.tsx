import React, {useEffect} from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import {routes} from "./routes";
import {Header} from "./components/Header";
import {Users} from "./components/pages/Users";
import {Albums} from "./components/pages/Albums";
import {Photos} from "./components/pages/Photos";
import './components/ui/style/style.css'
import {userPageApi} from "./api";

function App() {


    return (
        <div className="App" id='App'>
            <Header/>
            <Route path={routes.users}>
                <Users/>
            </Route>
            <Route path={routes.albums}>
                <Albums/>
            </Route>
            <Route path={routes.photos}>
                <Photos/>
            </Route>
            <Route exact path={routes.root}>

            </Route>
        </div>
    );
}

export default App;
