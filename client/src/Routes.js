import React from 'react';
import './App.css';
import { Switch,Route } from "react-router-dom";
import PublicLayout from "./Layouts/Public";
import PrivateLayout from "./Layouts/Private";
import Home from "./Components/Public/Home";
const Routes = () => {
  return (
        <Switch>
            <PublicLayout>
                <Route path="/" exact component={Home} />
            </PublicLayout>
            <PrivateLayout>
              
            </PrivateLayout>
        </Switch>
  );
}

export default Routes;
