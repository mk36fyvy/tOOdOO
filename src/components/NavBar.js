import React from 'react';
import { Col } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Col xs={2}>
            <ul>
                <li>Menu</li>
                <li>Add List</li>
                <li>Login</li>
            </ul>
        </Col>
    );
};

export default NavBar;
