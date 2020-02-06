import React from 'react';
import {Checkbox} from "@material-ui/core";
import IconButton from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Save from "@material-ui/icons/Save";
import DeleteIcon from '@material-ui/icons/Delete';

class TodoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            todoTitle: props.todo.title
        };
        this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
        this.onTitleClick = this.onTitleClick.bind(this);
        this.onChangeOldTitle = this.onChangeOldTitle.bind(this);
        this.onUpdateTitle = this.onUpdateTitle.bind(this);
    }

    onChangeCheckbox(event) {
        const {todo, updateTodo} = this.props;
        const newTodo = {
            ...todo,
            status: (event.target.value === 'false') ? 'DONE' : 'TODO'
        };
        updateTodo(newTodo);
    }

    onTitleClick() {
        this.setState({
            isEdit: true
        });

    }

    onChangeOldTitle(event) {
        this.setState({
            todoTitle: event.target.value
        });
    }

    onUpdateTitle() {
        const {todo, updateTodo} = this.props;
        const newTodo = {
            ...todo,
            title: this.state.todoTitle
        };
        updateTodo(newTodo);

        this.setState({
            isEdit: false
        });
    }

    render() {
        const {todo, deleteTodoById} = this.props;
        return (<
            div className="todo"
                style={
                    {
                        display: 'flex',
                        padding: 5,
                        background: 'white',
                        border: '1px solid #000',
                        margin: '5px',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                        overflowX: 'hidden'
                }
                }>
                <Checkbox value={todo.status === 'DONE'}
                          onChange={this.onChangeCheckbox}
                />
                {this.state.isEdit
                    ? (
                        <div>
                            <TextField value={this.state.todoTitle}
                                       onChange={this.onChangeOldTitle}
                                       style={{
                                           minWidth: '400px',
                                           maxWidth: '400px',
                                           wordWrap: 'break-word',

                                       }}
                            />
                            <IconButton onClick={this.onUpdateTitle}

                            >
                                <Save />
                            </IconButton>
                        </div>
                    )
                    : (
                        <div onClick={this.onTitleClick}>
                            {todo.title}
                        </div>
                    )
                }
                <IconButton onClick={() => deleteTodoById(todo.id)}
                            style={{
                                marginLeft:'auto',

                            }}
                >
                   <DeleteIcon />
                </IconButton>
            </div>
        );
    }
}

export default TodoComponent;