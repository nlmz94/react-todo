import React from 'react';

const ToDoList = ({toDoList}) => {
	return (<div>{toDoList.map(todo => {
		return (todo)
	})}</div>);
};

export default ToDoList;
