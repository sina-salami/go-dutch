import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { Container, Card, LeftNav, MainPart, RightNav } from './Styled';
import { PrivateRoute } from '../../App';
import { Routes } from '../../config';

import Home from '../Home';

const Application = () => {
    return (
        <Container>
            <Card>
                <LeftNav />
                <MainPart>
                    <BrowserRouter>
                        <Switch>
                            <PrivateRoute exact path={Routes.home}>
                                <Home />
                            </PrivateRoute>
                        </Switch>
                    </BrowserRouter>
                </MainPart>
                <RightNav />
            </Card>
        </Container>
    );
};

export default Application;
