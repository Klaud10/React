import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { LandingPage } from '../components/home/LandingPage'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/hero/:heroeId" component={ HeroScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    <Route exact path="/search" component={ SearchScreen } />
                    <Route exact path="/home" component={ LandingPage } />

                    <Redirect to="/home" />
                </Switch>
            </div>


        </>
    )
}
