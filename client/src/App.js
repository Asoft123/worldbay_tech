import { Toaster } from "react-hot-toast"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import HomePage from "./pages"
import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"
import { HOME, LOGIN, REGISTER } from "./routes/ROUTECONST"

function App() {
	return (
		<>
			<Toaster />
			<Router>
				<Routes>
					<Route exact path={HOME} element={<HomePage />} />
					<Route exact path={REGISTER} element={<RegisterPage />} />
					<Route exact path={LOGIN} element={<LoginPage />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
