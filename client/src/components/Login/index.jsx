import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from "yup"

import { HOME, REGISTER } from "routes/ROUTECONST"
import TextInput from "components/TextInput"
import { LinkText, LinkTextDiv, LogginButton, LoginContainer, LoginLeftSide, LoginLeftSideIner, LoginRighSide, PageLabel, SectionContainer } from "./style"
import { AppLogo, emailIcon, lockIcon, loginImage } from "utils/assets"
import { expiredLogout, getCurrentUser, loginUser } from "services/authService"

function LoginComponent() {
	const [show, setShow] = useState(false)

	let navigate = useNavigate()
	const formik = useFormik({
		enableReinitialize: false,
		initialValues: {
			email_address: "",
			user_password: ""
		},
		onSubmit: async (data, helpers) => {
			helpers.setSubmitting(true)
			const response = await loginUser(data)
			if (response?.status === "success") {
				sessionStorage.setItem("token", response.token)
				helpers.resetForm()
				helpers.setSubmitting(false)
				navigate(HOME)
			}
			if (response.status === "error") {
				helpers.setSubmitting(false)
			}
		},
		validationSchema: Yup.object({
			email_address: Yup.string().max(255).required("Email Address is required."),
			user_password: Yup.string().min(6).max(255).required("Password is required.").label("Password")
		})
	})

	const toggleShowPassword = () => {
		setShow(!show)
	}

	useEffect(() => {
		expiredLogout()
		const user = getCurrentUser()
		if (user?.name) navigate(HOME)
	}, [navigate])
	return (
		<LoginContainer>
			<PageLabel>
				<p className="page-label">Login</p>
			</PageLabel>
			<SectionContainer>
				<LoginLeftSide>
					<LoginLeftSideIner onSubmit={formik.handleSubmit}>
						<img className="app-logo" src={AppLogo} alt="App Logo" />
						<h3 className="welcome-text">Welcome!</h3>
						<p>Enter details to start using Grocedy</p>
						<TextInput
							autoComplete="false"
							type="email"
							label="Email Address"
							name="email_address"
							id="email_address"
							value={formik.values.email_address}
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							visible={formik.touched.email_address}
							error={formik.errors.email_address}
							iconUrl={emailIcon}
						/>

						<TextInput
							label="Password"
							autoComplete="false"
							type={show ? "text" : "password"}
							name="user_password"
							id="user_password"
							value={formik.values.user_password}
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							visible={formik.touched.user_password}
							error={formik.errors.user_password}
							passwordType={true}
							showlabel={show}
							onTogggleShowpassword={toggleShowPassword}
							iconUrl={lockIcon}
						/>
						<LogginButton type="submit">{formik.isSubmitting ? "loading..." : "Login"}</LogginButton>
						<LinkText>Forgot Password</LinkText>
						<LinkTextDiv>
							<LinkText>Don't have an account?&gt;</LinkText>
							<Link className="Link-Item " to={REGISTER}>
								{" "}
								REGISTER
							</Link>
						</LinkTextDiv>
					</LoginLeftSideIner>
				</LoginLeftSide>
				<LoginRighSide>
					<img src={loginImage} alt="Login Icon" />
					<h3>Welcome to Grocedy</h3>
				</LoginRighSide>
			</SectionContainer>
		</LoginContainer>
	)
}

export default LoginComponent
