import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";

const AddTodo = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();

		if(value.trim().length === 0)
		{
			alert("タスク名を入力してください!!");
			setValue("");
			return;
		}

		dispatch(
			addTask({
				task: value
			})
		);

		setValue("");
	};

	return (
		<div className="add-todo">
			<input
				type="text"
				className="task-input"
				placeholder="タスク名"
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button className="task-button" onClick={onSubmit}>
				追加
			</button>
		</div>
	);
};

export default AddTodo;
