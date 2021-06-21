import React from 'react';
import DraggableList from './DraggableList';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/App.css';
import NavBar from './NavBar';

const items = [
    { id: 1, text: 'do something1', isDone: false, category: '1' },
    { id: 2, text: 'do something2', isDone: true, category: '2' },
    { id: 3, text: 'do something3', isDone: false, category: '3' },
];

const App = () => {
    return (
        <Container fluid id="page">
            <Row>
                <NavBar />
                <Col>
                    <h1>To Do List 1</h1>
                    <DraggableList items={items} />
                    {/* This is a test */}
                </Col>
            </Row>
        </Container>
    );
};

export default App;
