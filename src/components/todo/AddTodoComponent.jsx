import React from 'react';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

class AddTodoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            inputValue: ''
        };
        this.onChangeTitle= this.onChangeTitle.bind(this);
        this.onSaveTitle= this.onSaveTitle.bind(this);
    }

    onChangeTitle(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    onSaveTitle(){
        this.props.addNewTodo(this.state.inputValue);
        this.setState({
            inputValue: ''
        });
    }

    render(){
        return (
            <Grid container
                  classes = {{
                      root: 'addTodoContainer'
                  }}

            >
                <Grid item
                xs = {8}
                >
                <TextField variant="outlined"
                           label="Todo title"
                           onChange={this.onChangeTitle}
                           value={this.state.inputValue}
                />
                </Grid>
                <Grid item
                      xs={4}
                >
                    <Button variant = "contained"
                            color="primary"
                            onClick={this.onSaveTitle}
                            style={{
                                margin: 10,

                            }}

                    >
                        Save
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

export default AddTodoComponent;