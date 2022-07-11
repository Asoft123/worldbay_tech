import styled from "styled-components"

export const TextInputContainer = styled.div`
	width: ${({ width }) => (width ? width : "100%")};
	display: flex;
	/* background: red; */
	flex-direction: column;
	margin-top: ${({ mt }) => (mt ? mt : "1rem")};
`
export const TextInputDiv = styled.div`
	width: ${({ width }) => (width ? width : "100%")};
	display: flex;
	align-items: center;
	border: 1px solid #cccccc;
	height: 35px;
	/* margin-left: 20px; */
	border-radius: 5px;
	margin-top: 0.2rem;
	img {
		width: 15px;
		height: 15px;
		margin-left: 5px;
	}
	.show-password-element {
		cursor: pointer;
	}
`

export const InputText = styled.input`
	width: calc(80% - 12px);
	height: 100%;
	background-color: transparent;
	height: 95%;
	padding-left: 5px;
	padding-right: 5px;
	outline: none;
	border: none;
	border-radius: 5px;
	color: #000;
	font-weight: 200;
	:active {
		background-color: transparent;
	}
	:valid {
		background-color: transparent;
	}
`
export const ErrorMsgSpan = styled.p`
	color: #dd0e3b;
	font-size: 14 px;
	margin-top: ${({ mt }) => (mt ? mt : "0px")};
	margin-bottom: -5px;
`
