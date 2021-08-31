import React from "react";
import {Container} from 'semantic-ui-react';
import './Layout.css';
import 'semantic-ui-css/semantic.min.css';

import {Route} from 'react-router-dom';
import Nav from '../Nav/Nav';
import DonutDudes from '../../containers/DonutDudes/DonutDudes';
import YourOrders from '../../containers/YourOrders/YourOrders';

const Layout = (props) => {
  return (
    <Container>
        <Nav />
        <Route path="/" exact component={DonutDudes} />
        <Route path="/orders" component={YourOrders} />
    </Container>
  )
};

export default Layout;
