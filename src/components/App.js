import React from 'react';
import DraggableList from './DraggableList';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/App.css';

import TodoList from './TodoList';

const items = [
    { id: 1, objective: 'do something1', isDone: false, category: '1' },
    { id: 2, objective: 'do something2', isDone: false, category: '2' },
    { id: 3, objective: 'do something3', isDone: false, category: '3' },
];

const newItems = 'one two three four';

const App = () => {
    return (
        <Container fluid id="page">
            <Row>
                <Col xs={2} id="menu">
                    <ul>
                        <li>Menu</li>
                        <li>Add List</li>
                        <li>Login</li>
                    </ul>
                </Col>
                <Col>
                    <h1>To Do List 1</h1>
                    <DraggableList items={newItems.split(' ')} />
                    {/* This is a test */}
                </Col>
            </Row>
        </Container>
    );
};

export default App;
