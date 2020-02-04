import React from 'react';
import back from '../../assets/back.jpg';

function TodoListContainer(props) {
    const {todoList} = props; // array of todo's
    return (
        <div style={{
            position: "relative",
            background: `url(${back})`,
            height: '100vh',
            padding: 10
        }}>
            {
                !!todoList.length
                && (
                    todoList.map(todo => (
                        <div key={todo.id}
                             style={{
                                 display: 'flex',
                                 padding: 5,
                                 background: '#3f51b5',
                                 borderBottom: '1px solid #000',
                             }}
                        >{todo.title}</div>
                        //границы
                        // заливка
                        //тени
                        //паддинги
                        //дисплей флекс
                        //марджины

                    ))
                )
            }

        </div>
    );
}

export default TodoListContainer;