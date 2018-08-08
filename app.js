var React = require('react');
var ReactDOM = require('react-dom');
const TodoItem = React.createClass({
    handleChange(e) {
        let newTodo = Object.assign({}, this.props.todo, {
            text: e.target.value
        });
        this.props.updateTodo(newTodo);
    },
    handleClick() {
        var newTodo = Object.assign({}, this.props.todo, {
            done: !this.props.todo.done
        });
        this.props.updateTodo(newTodo);
    },
    render() {
        const { todo } = this.props;
        return React.createElement("li", null,
            React.createElement("input", { value: todo.text, disabled: todo.done, onChange: this.handleChange }),
            React.createElement("button", { onClick: this.handleClick }, todo.done ? "Unfinish" : "Finish"));
    }
});
const TodoList = React.createClass({
    getInitialState() {
        return {
            todos: [
                { id: 1, text: 'todo one', done: false },
                { id: 2, text: 'todo two', done: false },
                { id: 3, text: 'todo three', done: false }
            ]
        };
    },
    updateTodo(newTodo) {
        this.setState(state => ({
            todos: state.todos.map(todo => todo.id === newTodo.id ? newTodo : todo)
        }));
    },
    render() {
        return React.createElement("ul", null, this.state.todos.map(todo => React.createElement(TodoItem, { key: todo.id, todo: todo, updateTodo: this.updateTodo })));
    }
});
ReactDOM.render(React.createElement(TodoList, null), document.getElementById('root'));
//# sourceMappingURL=app.js.map