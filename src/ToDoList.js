import React from 'react';

const ToDoList = ({toDoList}) => {
	return (<div>{toDoList.map(todo => {
		return (<div><p>{todo.id} - {todo.task}</p></div>);
	})}</div>);
};

export default ToDoList;
