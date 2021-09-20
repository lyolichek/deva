import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { history } from './bus/components/navigation/history';
import { book } from './bus/components/navigation/book';
import { Home } from './bus/pages/home/Home';
import { About } from './bus/pages/about/About';
import { Service } from './bus/pages/service/Service';
import { Contact } from './bus/pages/contact/Contact';

const DevaApp = () => {
  return (
    <div className="app">
        <Router history={history}>
            <Switch>
                <Route exact path={'/'} render={() => <Home />}/>
                <Route exact path={book[0].path} render={() => <About />}/>
                <Route exact path={book[1].path} render={() => <Service />}/>
                <Route exact path={book[5].path} render={() => <Contact />}/>
            </Switch>
        </Router>
    </div>
  );
};

export default DevaApp;
