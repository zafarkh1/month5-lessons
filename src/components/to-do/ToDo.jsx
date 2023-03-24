import React, {useState} from 'react'

import './to-do.scss'

const ToDo = () => {
	return (
		<>
		<h1>To Do App</h1>
		<form>
			<input type="text" />
			<button>Add</button>
		</form>
		<ul>
			<li></li>
		</ul>
		</>
	)
}

export default ToDo