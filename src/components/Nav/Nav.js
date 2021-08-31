import React from "react";
import {Menu} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

const Nav = (props) => {
  return (
    <Menu color='blue' stackable inverted>
        <Menu.Item>
            <img src='public/images/donut.jpg' alt='Donut Logo' />
        </Menu.Item>

        <Menu.Item as={NavLink} to="/" exact>
          Donut Dudes
        </Menu.Item>

        <Menu.Item as={NavLink} to="/orders">
          Your Orders
        </Menu.Item>
    </Menu>
  )
};

export default Nav;
