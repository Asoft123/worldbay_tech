import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from "yup"

import { AppLogo, emailIcon, lockIcon, loginImage, userIcon } from "utils/assets"
import { HOME, LOGIN } from "routes/ROUTECONST"
import { PageLabel } from "components/Login/style"
import TextInput from "components/TextInput"

import { LinkText, LinkTextDiv, RegisterButton, RegisterContainer, RegisterLeftSide, RegisterLeftSideIner, RegisterRighSide, SectionContainer } from "./style"
import { expiredLogout, getCurrentUser, signupUser } from "services/authService"

function RegisterComponent() {
	const [show, setShow] = useState(false)

	let navigate = useNavigate()
	const formik = useFormik({
		enableReinitialize: false,
		initialValues: {
			user_first_name: "",
			user_last_name: "",
			user_email_address: "",
			user_password: ""
		},
		onSubmit: async (data, helpers) => {
			helpers.setSubmitting(true)
			const response = await signupUser(data)
			console.log("Autho", response)
			if (response.status === "success") {
				helpers.resetForm()
				helpers.setSubmitting(false)
				navigate(LOGIN)
			}
			if (response.status === "error") {
				helpers.setSubmitting(false)
				console.log("Autho", response)
			}
		},
		validationSchema: Yup.object({
			user_first_name: Yup.string().min(2).max(25).required().label("First Name"),
			user_last_name: Yup.string().min(2).max(25).required().label("Last Name"),
			user_email_address: Yup.string().email().required().label("Email Address"),
			user_password: Yup.string().required().min(6).max(255).label("Passowrd")
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
		<RegisterContainer>
			<PageLabel>
				<p className="page-label">Register</p>
			</PageLabel>
			<SectionContainer>
				<RegisterLeftSide>
					<RegisterLeftSideIner onSubmit={formik.handleSubmit}>
						<img className="app-logo" src={AppLogo} alt="App Logo" />
						<h3>Register</h3>
						<p>Enter details to start using Grocedy</p>
						<TextInput
							label="First Name*"
							type="text"
							name="user_first_name"
							id="user_first_name"
							value={formik.values.user_first_name}
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							visible={formik.touched.user_first_name}
							error={formik.errors.user_first_name}
							iconUrl={userIcon}
						/>
						<TextInput
							label="Last name*"
							type="text"
							name="user_last_name"
							id="user_last_name"
							value={formik.values.user_last_name}
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							visible={formik.touched.user_last_name}
							error={formik.errors.user_last_name}
							iconUrl={userIcon}
						/>
						<TextInput
							label="Email Address*"
							type="email"
							name="user_email_address"
							id="user_email_address"
							value={formik.values.user_email_address}
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							visible={formik.touched.user_email_address}
							error={formik.errors.user_email_address}
							iconUrl={emailIcon}
						/>
						<TextInput
							type={show ? "text" : "password"}
							label="Password*"
							name="user_password"
							id="user_password"
							value={formik.values.user_password}
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							visible={formik.touched.user_password}
							error={formik.errors.user_password}
							passwordType={true}
							onTogggleShowpassword={toggleShowPassword}
							iconUrl={lockIcon}
							showlabel={show}
						/>
						<RegisterButton type="submit">{formik.isSubmitting ? "Creating..." : "Crate An Account"}</RegisterButton>
						<LinkText>
							By clicking on <span>Create An Account</span> I agree to the terms and conditions of Grocedy
						</LinkText>
						<LinkTextDiv>
							<LinkText>Already have an account?&gt;</LinkText>
							<Link className="Link-Item " to={LOGIN}>
								{" "}
								LOGIN
							</Link>
						</LinkTextDiv>
					</RegisterLeftSideIner>
				</RegisterLeftSide>
				<RegisterRighSide>
					<img src={loginImage} alt="Login Icon" />
					<h3>Welcome to Grocedy</h3>
				</RegisterRighSide>
			</SectionContainer>
		</RegisterContainer>
	)
}

export default RegisterComponent
