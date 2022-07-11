import { css } from "styled-components"

// type RuleOrQueryType = CSSObject | TemplateStringsArray;

const mediaQuery = query => rules =>
	css`
		@media screen and (${css(query)}) {
			${css(rules)}
		}
	`

const media = {
	smallMobile: mediaQuery`max-width: 320px`, // iphone 5/SE 😂
	iphoneX: mediaQuery`max-width: 375px`, // iphone X 😂
	mobile: mediaQuery`max-width: 480px`, // mobile
	tablet: mediaQuery`max-width: 768px`, // tablets
	ipadAir: mediaQuery`max-width: 820px`, // Ipad Air
	smallDesktop: mediaQuery`min-width: 1024px`, // tablets landscape, small desktops
	smallDesktopMinimum: mediaQuery`max-width: 1024px`, // tablets landscape, small desktops
	print: mediaQuery`print`
}

export default media
