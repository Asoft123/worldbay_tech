import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { LOGIN } from "routes/ROUTECONST"
import { expiredLogout, getCurrentUser } from "services/authService"

function HomeComponent() {
	const [loggedinUser, setLoggedinUser] = useState(null)
	let navigate = useNavigate()

	const handleLogoutUser = () => {
		sessionStorage.removeItem("token")
		navigate(LOGIN)
	}

	useEffect(() => {
		expiredLogout()
		const user = getCurrentUser()
		if (!user?.name) navigate(LOGIN)
		if (user?.name) setLoggedinUser(user)
	}, [navigate])
	return (
		<div>
			{loggedinUser?.name ? <p> Hi, welcome {loggedinUser?.name}</p> : "You not logged in"}
			{loggedinUser?.email ? <p> your username {loggedinUser?.email}</p> : ""}
			<button onClick={handleLogoutUser}>Logout</button>
		</div>
	)
}

export default HomeComponent
