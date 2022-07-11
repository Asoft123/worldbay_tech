import toast from "react-hot-toast"
import jwtDecode from "jwt-decode"
import { BASE_URL } from "."
import http from "./httpService"

const tokenKey = "token"
export async function loginUser(user) {
	try {
		const { data } = await http.post(`/auth/user/login`, user)
		toast.success(data.message)
		return data
	} catch (err) {
		let error = {}

		if (err && err.response) {
			err?.response?.data?.message && toast.error(err?.response?.data?.message)
			error = err.response.data
		} else {
			toast.success(err?.message)
			error = { status: "error", message: err?.message }
		}
		return error
	}
}
export async function signupUser(user) {
	try {
		const { data } = await http.post(`/auth/user/register`, user)
		toast.success(data.message)
		return data
	} catch (err) {
		let error = {}
		if (err && err.response) {
			error = err.response.data
			err?.response?.data?.message && toast.error(err?.response?.data?.message)
		} else {
			toast.error(err?.message)
			error = { status: "error", message: err?.message }
		}
		return error
	}
}

export function getCurrentUser() {
	try {
		const jwt = sessionStorage.getItem(tokenKey)
		return jwtDecode(jwt)
	} catch (ex) {
		return null
	}
}

export function expiredLogout() {
	const user = getCurrentUser()
	if (user && user?.exp) {
		if (Date.now() >= user?.exp * 1000) {
			sessionStorage.removeItem(tokenKey)
			return (window.location.href = "/login")
		}
	}
}
