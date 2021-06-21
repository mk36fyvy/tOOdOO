import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TodoItem = ({ objective, isDone, category }) => {
    return (
        <Container>
            <Row>
                <Col>{objective}</Col>

                <Col xs>
                    <button>Done</button>
                </Col>
            </Row>
        </Container>
    );
};

export default TodoItem;
