import './App.css';
import React, {useEffect, useState} from 'react';
import ToDoList from "./ToDoList";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";

function App() {
	const [newToDo, setNewToDo] = useState({id: 0, task: ''});
	const [toDoList, setToDoList] = useState([
		{id: 1, task: 'task1'},
		{id: 2, task: 'task2'},
		{id: 3, task: 'task3'}
	]);
	useEffect(() => {
		localStorage.setItem("toDoList", JSON.stringify(toDoList));
	}, [toDoList]);

	function onChange(event) {
		setNewToDo({id: toDoList.length + 1, task: event.target.value});
	}

	function onSubmit() {
		if (newToDo.length !== 0) {
			setToDoList([...toDoList, newToDo]);
			setNewToDo({id: 0, task: ''});
		}
	}

	return (
		<Router>
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/todo/add">Add ToDo</Link>
					</li>
					<li>
						<Link to="/todo/manage">Manage ToDo</Link>
					</li>
				</ul>
				<Routes>
					<Route exact path='/' element={< Home/>}/>
					<Route exact path='/todo/add' element={< AddToDo/>}/>
					<Route exact path='/todo/manage' element={< ManageToDo/>}/>
				</Routes>
			</div>
		</Router>
	);

	function Home() {
		return <h3>Home</h3>;
	}

	function AddToDo() {
		return (
			<div>
				<h3>Add a task to your TODO List</h3>
				<ToDoList toDoList={toDoList}/>
				<label htmlFor="new-todo">What needs to be done?</label>
				<input id="new-todo" onChange={onChange} value={newToDo.task}/>
				<button onClick={onSubmit}>Add task number {toDoList.length + 1}</button>
			</div>);
	}

	function ManageToDo() {
		return (<div>
			<h3>Manage your TODO List</h3>
			<ToDoList toDoList={toDoList}/>
		</div>);
	}
}

export default App;
