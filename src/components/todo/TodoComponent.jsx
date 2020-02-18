import React from 'react';
import {Checkbox} from "@material-ui/core";
import IconButton from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Save from "@material-ui/icons/Save";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";

class TodoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            todoTitle: props.todo && props.todo.title
        };
        this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
        this.onTitleClick = this.onTitleClick.bind(this);
        this.onChangeOldTitle = this.onChangeOldTitle.bind(this);
        this.onUpdateTitle = this.onUpdateTitle.bind(this);
    }

    componentDidUpdate(prevProps, prevState){
        console.log(this.state);
        console.log(this.props);
        if (this.props.todo.title !== this.state.todoTitle)
        this.setState({
            todoTitle: this.props.todo && this.props.todo.title
        });
    }


    onChangeCheckbox(event) {
        const {todo, updateTodo} = this.props;
        const newTodo = {
            ...todo,
            status: (event.target.checked) ? 'DONE' : 'TODO'
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
        const {todo, deleteTodoById, onOpenModal} = this.props;
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

                        }
                    }>
                <Checkbox checked={todo.status === 'DONE'}
                          onChange={this.onChangeCheckbox}
                          disabled={this.state.isEdit}
                />
                {this.state.isEdit
                    ? (
                        <div className="todoInput">
                            <TextField value={this.state.todoTitle}
                                       onChange={this.onChangeOldTitle}
                                       style={{
                                           width: '400px'
                                       }}

                            />
                            <IconButton onClick={this.onUpdateTitle}

                            >
                                <Save/>
                            </IconButton>
                        </div>
                    )
                    : (
                        <>
                            <div onClick={this.onTitleClick}
                                 className="todoTitle"
                                 style={{
                                     wordBreak: 'break-word',
                                     width: '400px',
                                 }}
                            >
                                {todo.title}
                            </div>
                            <Button onClick={() => onOpenModal(todo.id)}>
                                show more
                            </Button>
                        </>
                    )
                }
                <IconButton onClick={() => deleteTodoById(todo.id)}
                            style={{
                                marginLeft: 'auto',
                            }}
                            disabled={this.state.isEdit}
                >
                    <DeleteIcon style={{
                        marginBottom: '6px'
                    }}/>
                </IconButton>

            </div>
        );
    }
}

export default TodoComponent;