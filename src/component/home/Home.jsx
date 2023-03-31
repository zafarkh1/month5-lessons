import React from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Home = (props) => {
	const history = useNavigate();

		const handleLogout = async () => {
			await auth.signOut()
			history.push('/login')
		}

	return (
		<div>
			<h1>Home</h1>
			{props.user ? <button onClick={handleLogout}>Logout</button> : <Link to='/login'></Link>}
		</div>
	)
}

export default Home