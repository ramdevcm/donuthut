import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import Header from '../components/Header';


/* components */
import About from '../components/About';
import Shop from '../components/Shop';
import Menu from '../components/Menu';
import Clients from '../components/Clients';
import Prices from '../components/Prices';


/* screens */

const Router = () => {


    return (
        <BrowserRouter>

        
      
            
              <Switch>
                    <Route path='/'  component={Header} />
                    <Route path='/menu' exact component={Menu} />
                    <Route path='/about'exact component={About} />
                    <Route path='/shop'exact component={Shop} />
                    <Route path='/client'exact component={Clients} />
                    <Route path='/price'exact component={Prices} />
                </Switch>
                <Header/>
      
      
        </BrowserRouter>
    )
}

export default Router
