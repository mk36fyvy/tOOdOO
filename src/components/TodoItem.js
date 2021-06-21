import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/TodoItem.css';

const TodoItem = ({ item }) => {
    const [isDone, setIsDone] = useState(item.isDone);
    const [text, setText] = useState(item.text);
    const [textInput, setTextInput] = useState(text);
    const [isBeingEdited, setIsBeingEdited] = useState(false);

    const handleSubmit = () => {
        setIsBeingEdited(false);
        console.log(isBeingEdited);
        setText(textInput);
    };

    return (
        <Container id="todo-item">
            <Row fluid="md">
                <Col style={{ textDecoration: isDone ? 'line-through' : '' }}>
                    {isBeingEdited ? (
                        <div>
                            <input
                                type="text"
                                value={textInput}
                                onChange={(e) => setTextInput(e.target.value)}
                            />{' '}
                            <Button onClick={handleSubmit}>OK</Button>
                        </div>
                    ) : (
                        <div>{text}</div>
                    )}
                </Col>
                <Col className="text-right">
                    <Button>Change color</Button>{' '}
                    <Button onClick={() => setIsBeingEdited(!isBeingEdited)}>
                        Edit
                    </Button>{' '}
                    <Button
                        onClick={() => {
                            setIsDone(!isDone);
                        }}
                    >
                        Toggle Done
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default TodoItem;
