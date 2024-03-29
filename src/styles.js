import styled, { keyframes } from 'styled-components';
import headerImage from './images/header4.png';
import chartImage from './images/header-pattern.png';

const ProtoSemiticAleph = () => {
	return (
	  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" version="1">
		<g
		  fill="none"
		  fillRule="evenodd"
		  stroke="#000"
		  strokeDasharray="none"
		  strokeLinecap="round"
		  strokeLinejoin="round"
		  strokeMiterlimit="4"
		  strokeOpacity="1"
		  strokeWidth="3"
		>
		  <path d="M11.912 6.833c0 11.551 12.373 12.75 16.252 12.75h18.408c6.518 0 5.986-11.134 5.986-11.134"></path>
		  <path d="M29.212 20.78l-17.36 32.206L17 58.134l30.41-19.096V20.361"></path>
		  <path d="M34.286 29.46v-2.54"></path>
		</g>
	  </svg>
	);
  }

const ScrollGradient = keyframes`
	0% {
		background-position: 0%
	}
	50% {
		background-position: 100%
		}
	100% {
		background-position: 0%
		}
	}
`

const ScrollImage = keyframes`
	0% {
		transform: rotate(0deg) translateX(5%) rotate(0deg)
	}
	100% {
		transform: rotate(360deg) translateX(5%) rotate(-360deg)
	}
`

export const colors = {
	red9: "#ffdcd5",
	red8: "#ffb9ac",
	red7: "#ff9280",
	red6: "#f36e5a",
	red5: "#d8513d",
	red4: "#b73926",
	red3: "#902515",
	red2: "#65160a",
	red1: "#360903",
	orange9: "#ffdeba",
	orange8: "#febd79",
	orange7: "#f69a44",
	orange6: "#e37c1b",
	orange5: "#c96100",
	orange4: "#aa4800",
	orange3: "#853300",
	orange2: "#5d2000",
	orange1: "#320f00",
	yellow9: "#f0e5a0",
	yellow8: "#edda5e",
	yellow7: "#dabe0b",
	yellow6: "#bd9f00",
	yellow5: "#a38600",
	yellow4: "#7d6300",
	yellow3: "#604a00",
	yellow2: "#423100",
	yellow1: "#211800",
	green9: "#d1ecc1",
	green8: "#a9d78c",
	green7: "#86bf60",
	green6: "#67a73d",
	green5: "#4d8e23",
	green4: "#37730f",
	green3: "#245802",
	green2: "#153c00",
	green1: "#091e00",
	jade9: "#c4eddc",
	jade8: "#92d8bb",
	jade7: "#68c09c",
	jade6: "#46a880",
	jade5: "#2c8e66",
	jade4: "#18744f",
	jade3: "#0a5838",
	jade2: "#023c24",
	jade1: "#001f12",
	blue9: "#d6e5fe",
	blue8: "#b0cbfc",
	blue7: "#8cb0f9",
	blue6: "#6d95ef",
	blue5: "#537bd9",
	blue4: "#3b62ba",
	blue3: "#274996",
	blue2: "#17306b",
	blue1: "#0a1839",
	periwinkle9: "#eadfff",
	periwinkle8: "#d4c0ff",
	periwinkle7: "#bca1ff",
	periwinkle6: "#a183fe",
	periwinkle5: "#8867e9",
	periwinkle4: "#6e4fcb",
	periwinkle3: "#5438a4",
	periwinkle2: "#382475",
	periwinkle1: "#1d113e",
	purple9: "#f5dbff",
	purple8: "#e6b9ff",
	purple7: "#d497fc",
	purple6: "#bf79ed",
	purple5: "#a75dd7",
	purple4: "#8b44ba",
	purple3: "#6d2e95",
	purple2: "#4b1c6a",
	purple1: "#270d38",
	neutral10: "#ffffff",
	neutral9: "#eeeeee",
	neutral8: "#c9c9c9",
	neutral7: "#b0b0b0",
	neutral6: "#979797",
	neutral5: "#7e7e7e",
	neutral4: "#666666",
	neutral3: "#4d4d4d",
	neutral2: "#333333",
	neutral1: "#191919"
};

const breakpoints = {
	first: '35rem', 	// 560px
	second: '50rem',	// 800px
	third: '65rem',		// 1040px
	fourth: '80rem', 	// 1280px
	fifth: '95rem',		// 1520px
	sixth: '110rem',	// 1760px
	seventh: '150rem'	// 2400px
};

export const Neutral4 = styled.span`
	color: ${colors.neutral4};
`;

export const Canvas = styled.div`
    box-sizing: border-box;
    width: 100%;
`;

export const Header = styled.div`
	animation: ${ScrollGradient} 45s ease infinite;
	background: ${colors.purple5};
	background: linear-gradient(
			100deg,
			${colors.purple5} 0%,
			${colors.blue5} 67%,
			${colors.green5} 100%
		);
	background-size: 300% 100%;
  	color: ${colors.neutral9};
	display: flex;
	flex-direction: column;
	font-size: 2rem;
	justify-content: center;
	min-height: 100vh;
	line-height: 1.75rem;
	position: relative;
	text-align: center;
	overflow: hidden;

	::before {
		animation: ${ScrollImage} 120s linear infinite;
		background-image: url(${headerImage});
		background-size: cover;
		background-color: ${colors.neutral2};
		background-position: center center;
		content: " ";
		mix-blend-mode: luminosity;
		opacity: 0.2;
		position: absolute;
		left: -10vw;
		top: -10vw;
		right: -10vw;
		bottom: -10vw;
		z-index: 1;
	}

	::after {
		animation: ${ScrollImage} 120s linear infinite;
		background-image: url(${headerImage});
		background-size: cover;
		background-color: ${colors.neutral2};
		background-position: center center;
		content: " ";
		mix-blend-mode: color;
		opacity: 0.2;
		position: absolute;
		left: -10vw;
		top: -10vw;
		right: -10vw;
		bottom: -10vw;
		z-index: 2;
	}
`;

export const IntroSection = styled.div`
	padding: 2rem 2rem 0;
	position: relative;
	
	@media only screen and (min-width: ${breakpoints.fourth}) {
		padding: 4rem;
	}
`;

export const IntroSectionGrid = styled.div`
	margin: 0 auto;
	max-width: 60rem;

	@media only screen and (min-width: ${breakpoints.second}) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-column-gap: 4rem;
		grid-row-gap: 4rem;
	}

	@media only screen and (min-width: ${breakpoints.fifth}) {
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(3, 1fr);
		max-width: 90rem;
	}
`;

export const IntroSectionCellWrapper = styled.div`
	margin-bottom: 3rem;
	grid-area: ${props => props.isBig ? "1 / 1 / 1 / 3;" : ""};

	@media only screen and (min-width: ${breakpoints.second}) {
		margin-bottom: 0;
	}

	@media only screen and (min-width: ${breakpoints.fifth}) {
		margin-top: ${props => props.isBig ? "-1rem;" : "0"};
		grid-area: ${props => props.isBig ? "1 / 1 / 4 / 2;" : ""};
	}
`;

export const IntroSectionCellHeading = styled.h3`
	font-size: ${props => props.isBig ? "2rem" : "1.5rem"};
	line-height: 1.5;
	margin: 0;
	
	@media only screen and (min-width: ${breakpoints.second}) {
		font-size: ${props => props.isBig ? "3rem" : "1.5rem"};
	}

	@media only screen and (min-width: ${breakpoints.fifth}) {
		position: ${props => props.isBig ? "sticky" : "static"};
		top: ${props => props.isBig ? "1rem" : "auto"};
	}
`;

export const IntroSectionCellHeadingLatin = styled.p`
	margin: 0;
`;

export const IntroSectionCellHeadingV = styled.p`
	color: ${colors.purple5};
	font-family: 'Vixa Geometric Bold', Montserrat, sans-serif;
	font-size: 120%;
	font-variant-ligatures: discretionary-ligatures;
	line-height: 1.5;
	margin: 0;
`;

export const IntroSectionCellParagraph = styled.p`
	margin: 0.6rem 0;
`;

/* 

CONTENT GENERAL

*/

export const InlineV = styled.span`
	color: ${colors.purple5};
	font-size: 135%;
	font-family: "Vixa Geometric Bold", "Montserrat", sans-serif;
	font-variant-ligatures: discretionary-ligatures;
`;

export const Heading1 = styled.h1`
	font-family: 'Montserrat', sans-serif;
	font-size: 3rem;
	line-height: 4.5rem;
`;

export const Heading2 = styled.h2`
	font-family: 'Montserrat', sans-serif;
	font-size: 2rem;
	line-height: 1.5;

	@media only screen and (min-width: ${breakpoints.second}) {
		font-size: 3rem;

		${InlineV} {	
			font-size: 120%;
		}
	}
`;

export const Heading3 = styled.h3`
	font-family: 'Montserrat', sans-serif;
	font-size: 1.5rem;
	line-height: 2.25rem;
	margin-top: 4rem;
	margin-bottom: 1.5rem;
`;

export const Heading4 = styled.h4`
	font-family: 'Montserrat', sans-serif;
	font-size: 1.25rem;
	line-height: 1.5625rem;
	margin-top: 4rem;
`;

export const Heading5 = styled.h5`
	font-family: 'Montserrat', sans-serif;
	font-size: 1.10rem;
	line-height: 1.375rem;
`;

export const Paragraph = styled.p`
	font-size: 1rem;
	margin-top: 1.25rem;
	max-width: 35rem;
	margin-bottom: 1.5rem;

	@media only screen and (min-width: ${breakpoints.second}) {
		font-size: 1.125rem;
	}
`;

export const ParagraphBig = styled(Paragraph)`
	font-size: 1.25rem;
	margin-top: 2rem;
	margin-bottom: 2rem;
	max-width: none;

	@media only screen and (min-width: ${breakpoints.second}) {
		font-size: 1.5rem;
	}
`;

export const BigLetter = styled.p`
	font-family: "Montserrat", sans-serif;
	font-size: 2.5rem;
	line-height: 2.75rem;
	margin: 0 auto;
`;

export const Image = styled.img`
	width: 100%;
`;

export const ImageWithBorder = styled.img`
	width: 100%;
	border: 1px solid ${colors.neutral7};
`;

export const NumberedList = styled.ol``;

export const NumberedListItem = styled.li``;

/*

CONTENT LAYOUT

*/

export const ContentSection = styled.div`
	margin: 0;
	max-width: 60rem;
	padding: 0 2rem;
	position: relative;

	@media only screen and (min-width: ${breakpoints.third}) {
		margin: 4rem auto 0;
	}

	@media only screen and (min-width: ${breakpoints.fourth}) {
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-template-rows: 1fr;
		grid-column-gap: 4rem;
		grid-row-gap: 4rem;
		max-width: 90rem;
	}
`;

export const ContentSectionTitle = styled.div`

	${Heading2} {
		margin-top: 4.5rem;

		@media only screen and (min-width: ${breakpoints.third}) {
			margin-top: 1rem;
			position: sticky;
			top: 1rem;
		}
	}
`;

export const ContentSectionContent = styled.div``;

/*

HEADER

*/

export const Title = styled(Heading1)`
	color: ${colors.neutral9};
	font-size: 4rem;
	font-variant-ligatures: discretionary-ligatures;
	line-height: 8rem;
	margin-bottom: 0;
	margin-top: 0;
	text-shadow: 0.5rem 0.5rem 10rem rgba(0,0,0,1);
	z-index: 2;

	${InlineV} {
		color: white;
	}

	@media only screen and (min-width: ${breakpoints.first}) {
		font-size: 6rem;
		line-height: 12rem;
	}

	@media only screen and (min-width: ${breakpoints.second}) {
		font-size: 9rem;
		line-height: 18rem;
	}

	@media only screen and (min-width: ${breakpoints.third}) {
		font-size: 12rem;
		line-height: 24rem;
		text-shadow: 0.5rem 0.5rem 10rem rgba(0,0,0,0.75);
	}

	@media only screen and (min-width: ${breakpoints.fourth}) {
		font-size: 14rem;
		line-height: 28rem;
		text-shadow: 0.5rem 0.5rem 10rem rgba(0,0,0,0.5);
	}

	@media only screen and (min-width: ${breakpoints.fifth}) {
		font-size: 18rem;
		line-height: 36rem;
		text-shadow: 0.5rem 0.5rem 10rem rgba(0,0,0,0.25);
	}

	@media only screen and (min-width: ${breakpoints.sixth}) {
		font-size: 20rem;
		line-height: 40rem;
	}
`;

export const Etymology = styled.p`
	font-size: 1rem;
	z-index: 3;
	margin: 0 auto 2rem;
	width: 100%;
`;

/*

CHART

*/

export const ChartSection = styled.div`
	position: relative;
`;

export const ChartsContainer = styled.div`
	padding: 1rem;

	::before {
		background-color: ${colors.neutral9};
		content: " ";
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: -2;
	}

	::after {
		background-image: url(${chartImage});
		background-size: 1024px;
		background-color: ${colors.neutral9};
		background-position: center top;
		content: " ";
		mix-blend-mode: multiply;
		opacity: 0.06;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
	}

	@media only screen and (min-width: ${breakpoints.third}) {
		padding: 2rem;
	}

	@media only screen and (min-width: ${breakpoints.seventh}) {
		display: flex;
		justify-content: center;
	}
`;

export const ChartContainer = styled.div`
	@media only screen and (min-width: ${breakpoints.seventh}) {
		:first-of-type {
			margin-right: 8rem;
		}
	}
`;

export const ChartWrapper = styled.table`
	display: block;
	margin: 0 auto;

	@media only screen and (min-width: ${breakpoints.fourth}) {
		border-spacing: 0.5rem;
		display: table;
		margin: 3rem auto;
		position: relative;
		table-layout: fixed;
		left: -4.25rem;
	}

	@media only screen and (min-width: ${breakpoints.fifth}) {
		left: -4.75rem;
	}
`;

export const ChartTitle = styled(Heading2)`
	background: ${colors.neutral10};
	color: ${colors.neutral1};
	font-size: 2rem;
	line-height: 1.5;
	margin: 0;
	padding: 0 2rem 3rem;
	text-align: center;

	@media only screen and (min-width: ${breakpoints.second}) {
		font-size: 3rem;
		line-height: 1.5;
		padding: 3rem 3rem 4.5rem;
	}
`;

export const FilterWrapper = styled.div`
	background: ${colors.neutral2};
	box-shadow: 0 0 1rem rgb(0 0 0 / 30%);
	display: flex;
	margin: 0;
	justify-content: center;
	position: sticky;
	top: 0;
	z-index: 2;
`;

export const FilterButton = styled.button`
	background: ${props => props.isActive ? colors.purple3 : colors.neutral2};
	border: none;
	color: ${colors.neutral10};
	cursor: pointer;
	flex: 0 0;
	font-family: "Montserrat", sans-serif;
	font-size: 0.875rem;
	font-weight: bold;
	line-height: 1.25rem;
	padding: 0.75rem 1rem;

	:hover,
	:focus {
		background: ${colors.purple4};
		outline: none;
	}

	@media only screen and (min-width: ${breakpoints.fourth}) {
		font-size: 1.25rem;
		line-height: 2rem;
		padding: 1rem 1.5rem;
	}
`;

export const FilterOptions = styled.div``;

export const FilterTitle = styled.div``;

export const ChartSubtitle = styled(Heading3)`
	font-size: 2rem;
	line-height: 1.5;
	margin: 3rem 0 1rem;
	text-align: center;

	@media only screen and (min-width: ${breakpoints.fourth}) {
		margin: 4.5rem 0 3rem;
	}
`;

export const ChartHeaderCellWrapper = styled.th`
	display: ${props => props.isEmpty ? "none;" : "block"};
	color: ${colors.neutral4};
	flex: 1 0 100%;
	margin: 2rem 0 0.25rem;
	padding: 0;

	@media only screen and (min-width: ${breakpoints.fourth}) {
		display: table-cell;
		font-size: 0.625rem;
		padding: 0 0.75rem;
		text-align: right;
		width: 6rem;
	}

	@media only screen and (min-width: ${breakpoints.fifth}) {
		font-size: 0.75rem;
		padding: 0 1rem;
		width: 7rem;
	}
`;

export const ChartHead = styled.thead`
	display: none;

	@media only screen and (min-width: ${breakpoints.fourth}) {
		display: table-header-group;

		${ChartHeaderCellWrapper} {
			padding-bottom: 0.5rem;
			text-align: center;
			vertical-align: bottom;
		}
	}
`;

export const ChartBody = styled.tbody`
	display: block;

	@media only screen and (min-width: ${breakpoints.fourth}) {
		display: table-row-group;
	}
`;

export const StyledChartRow = styled.tr`
	display: ${(props) => (props.isVisible ? "flex" : "none")};
	flex-wrap: wrap;
	justify-content: center;

	@media only screen and (min-width: ${breakpoints.fourth}) {
		display: ${(props) => (props.isVisible ? "table-row" : "none")};
	}
`;

export const ChartCellWrapper = styled.td`
	background: ${(props) => (props.isEmpty ? "none" : colors.neutral10)};
	border-radius: 0.5rem;
	box-shadow: ${(props) => (props.isEmpty ? "none" : "0 0 1rem rgb(0 0 0 / 10%)")};
	display: ${(props) => (props.isEmpty ? "none" : "table-cell")};
	height: 6rem;
	margin: 0.25rem;
	padding: 0.75rem;
	width: 6rem;

	${props => props.isEmpty && `
	> ${ChartCellVixa},
	> ${ChartCellTertiaryLine} {
		display: none;
	}

	@media only screen and (min-width: ${breakpoints.fourth}) {
		display: table-cell;
	}

	@media only screen and (min-width: ${breakpoints.fifth}) {
		height: 7rem;
		margin: 0;
		padding: 1rem;
		width: 7rem;
	`}
`;

export const ChartCellVixa = styled.div`
	font-size: 3rem;
	line-height: 1;
	font-weight: bold;
	font-family: "Vixa Geometric Bold", "Montserrat", sans-serif;
	font-variant-ligatures: discretionary-ligatures;
	margin: 1.25rem 0 0.25rem;
	text-align: center;

	@media only screen and (min-width: ${breakpoints.fifth}) {
		font-size: 4rem;
		margin: 1.25rem 0 0.25rem;
	}
`;

export const ChartCellSecondaryLine = styled.div`
	display: flex;
	font-size: 0.875rem;
	line-height: 0.875rem;
	margin-top: 0.125rem;
	justify-content: center;
	text-align: center;

	@media only screen and (min-width: ${breakpoints.fifth}) {
		font-size: 1rem;
		line-height: 1rem;
	}
`;

export const ChartCellTertiaryLine = styled.div`
	color: ${colors.neutral4};
	display: flex;
	font-size: 1rem;
	line-height: 1rem;
	justify-content: space-between;
`;

export const ChartCellSecondLineItem = styled.div``;

/*

INTRODUCTION and EXPLAINER

*/

export const CategoryCardWrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 3rem 0;
	max-width: 35rem;
`;

export const CategoryCardSymbol = styled.div`
	align-items: center;
	background-color: ${(props) => (props.color ? colors[props.color] : colors.neutral2)};
	border-radius: 50%;
	display: flex;
	flex: 0 0 4.5rem;
	font-size: 2.5rem;
	height: 4.5rem;
	line-height: 1.5;
	margin-right: 1rem;
	justify-content: center;

	${InlineV} {
		color: ${colors.neutral10};
	}
`;

export const CategoryCardContent = styled.div`
	display: flex;
	flex-direction: column;
`;

export const CategoryCardTitle = styled(Heading4)`
	color: ${(props) => (props.color ? colors[props.color] : colors.neutral2)};
	margin: 0 0 0.25rem 0;
`;

export const CategoryCardText = styled(Paragraph)`
	margin: 0;
`;

export const MethodCardWrapper = styled.div``;

export const MethodCardTitle = styled(Heading4)`
	margin-bottom: 1.25rem;
`;

export const MethodCardCharacters = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin-bottom: -1rem;
`;

export const MethodCardCharacter = styled.div`
	align-items: center;
	background-color: ${(props) => (props.color ? colors[props.color] : colors.neutral2)};
	border-radius: 50%;
	display: flex;
	flex: 0 0 4.5rem;
	font-size: 2.5rem;
	height: 4.5rem;
	line-height: 1.5;
	margin-bottom: 1rem;
	margin-right: 1rem;
	justify-content: center;

	${InlineV} {
		color: ${colors.neutral10};
	}
`;

export const MethodCardBody = styled.div``;

export const EgyptianCharacter = styled(BigLetter)`
	font-size: 6rem;
	line-height: 1.5;
	margin-top: -4rem;
	margin-bottom: -2rem;
`;

export const StyledProtoSemiticAleph = styled(ProtoSemiticAleph)`
	width: 22px;
`;