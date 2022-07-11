import React from "react"
import { ErrorMsgSpan, InputText, TextInputContainer, TextInputDiv } from "./style"

function TextInput({ name, type = "text", showlabel, passwordType = false, id, onChange, label, onTogggleShowpassword, mt = "", iconUrl, width = "100%", error, visible, ErrorMt, ...rest }) {
	return (
		<TextInputContainer mt={mt} width={width}>
			<label htmlFor={name}>{label}</label>
			<TextInputDiv>
				{iconUrl && <img src={iconUrl} alt={label} />}
				<InputText type={type} name={name} id={id} onChange={onChange} {...rest} />{" "}
				{passwordType ? (
					<p className="show-password-element" onClick={onTogggleShowpassword}>
						{showlabel ? "hide" : "view"}
					</p>
				) : null}
			</TextInputDiv>
			{visible && error ? <ErrorMsgSpan ErrorMt={`${mt}`}>{error}</ErrorMsgSpan> : null}
		</TextInputContainer>
	)
}

export default TextInput
