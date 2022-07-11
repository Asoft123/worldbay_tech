import styled from "styled-components/macro"
import media from "utils/media"
export const LoginContainer = styled.div`
	width: calc(100% -100px);
	height: 100vh;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	background-color: #c4c4c4;
	padding: 0px 50px;
	color: grey;
	.page-label {
		margin-bottom: 3px;
	}
	${media.smallDesktopMinimum`
    padding:0px 10px;
	min-height: 100vh;
    `}
	${media.mobile`
    padding:0px 10px;
	min-height: 100vh;
    `}
`
export const PageLabel = styled.div`
	width: 100%;
	display: flex;
`
export const SectionContainer = styled.div`
	width: 100%;
	height: 90%;
	border-radius: 2px;
	display: flex;
`
export const LoginLeftSide = styled.div`
	width: calc(100% - 20px);
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	background: #fff;
	.welcome-text {
		margin-bottom: -10px;
	}
	${media.mobile`
    width: 100%;
    padding:0px 10px;
    `}
`
export const LoginLeftSideIner = styled.form`
	width: calc(70% - 30px);
	display: flex;
	flex-direction: column;
	padding-left: 50px;
	padding-top: 20px;
	.app-logo {
		width: 100px;
		height: 70px;
	}
	${media.mobile`
    width: calc(100% - 0px);
    padding-left: 0px;
	.app-logo {
	align-self: center;
	}
    `}
`
export const LoginRighSide = styled.div`
	width: calc(100% - 20px);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	flex-wrap: wrap;
	background: #a6d183;
	img {
		width: 50%;
	}
	h3 {
		color: #fff;
		margin-top: 10px;
	}
	${media.smallDesktopMinimum`
    display: none;
    `}
	${media.mobile`
    display: none;
    `}
`
export const LogginButton = styled.button`
	width: 100%;
	height: 35px;
	border: none;
	outline: none;
	color: #fff;
	background: #a6d183;
	margin-top: 30px;
	border-radius: 5px;
	cursor: pointer;
	text-transform: uppercase;
`
export const LinkText = styled.p`
	color: #000;
	text-decoration: none;
	/* margin-top: -10px; */
`
export const LinkTextDiv = styled.p`
	display: flex;
	text-decoration: none;
	margin-top: -10px;
	align-items: center;
	.Link-Item {
		margin-top: 0px;
		margin-left: 5px;
		text-decoration: none;
		color: #a6d183;
	}
`
