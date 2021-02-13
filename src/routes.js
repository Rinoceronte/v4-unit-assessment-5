import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Post from './Components/Post/Post';
import Form from './Components/Form/Form';
import Dash from './Components/Dash/Dash';
import Auth from './Components/Auth/Auth';

export default  (
        <Switch>
            <Route path="/" exact component={Auth} />
            <Route path="/dash" component={Dash} />
            <Route path="/post/:id" component={Post} />
            <Route path="/form" component={Form} />
        </Switch>
    )
