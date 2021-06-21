import React from 'react';

import TodoItem from './TodoItem';

const items = [
    { id: 1, objective: 'do something1', isDone: false, category: '1' },
    { id: 2, objective: 'do something2', isDone: false, category: '2' },
    { id: 3, objective: 'do something3', isDone: false, category: '3' },
];

const TodoList = () => {
    return (
        <div className="position-relative">
            <div className="d-grid gap-3">
                {items.map((item) => {
                    return (
                        <div className="container-fluid" key={item.id}>
                            <TodoItem
                                objective={item.objective}
                                isDone={item.isDone}
                                category={item.category}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="position-absolute top-100 start-50 translate-middle">
                <button className="btn btn-primary rounded">+</button>
            </div>
        </div>
    );
};

export default TodoList;
