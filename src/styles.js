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
	red3: '#9C2F13',
    red4: '#C34727',
	red8: '#FFB199',
	red9: '#FFD9CD',
    yellow4: '#8B7409',
    green4: '#208058',
    green5: '#3A9D74',
    blue4: '#456DC9',
    blue5: '#628AE6',
	blue8: '#D2E2FE',
	purple3: '#7835A2',
    purple4: '#984EC7',
    purple5: '#B56DE5',
	purple8: '#E2B1FF',
	purple9: '#F3D8FF',
	neutral10: '#FFFFFF',
	neutral9: '#EEEEEE',
	neutral8: '#C4C4C4',
    neutral4: '#707070',
	neutral2: '#393939',
	neutral1: '#1C1C1C'
}

const breakpoints = {
	first: '35rem', 	// 560px
	second: '50rem',	// 800px
	third: '65rem',		// 1040px
	fourth: '80rem', 	// 1280px
	fifth: '95rem',		// 1520px
	sixth: '110rem',	// 1760px
	seventh: '150rem'	// 2400px
}

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
	padding: 4rem;
	position: relative;
`;

export const IntroSectionGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-column-gap: 4rem;
	grid-row-gap: 4rem;
	margin: 0 auto;
	max-width: 90rem;
`;

export const IntroSectionCellWrapper = styled.div`
	margin-top: ${props => props.isBig ? "-1rem;" : ""};
	grid-area: ${props => props.isBig ? "1 / 1 / 4 / 2;" : ""};
`;

export const IntroSectionCellHeading = styled.h3`
	font-size: ${props => props.isBig ? "3rem" : "1.5rem"};
	line-height: 1.5;
	margin: 0;
	position: ${props => props.isBig ? "sticky" : "static"};
	top: ${props => props.isBig ? "1rem" : "auto"};
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

export const ChartLabelDescription = styled.div``;

export const Content = styled.div`
	padding: 0 2rem;
	max-width: 33rem;
	margin: 0 auto;
`;

export const ContentFullSize = styled.div`
	padding: 2rem 2rem 0;
	margin: 0 auto;
`;

export const ContentWide = styled.div`
	width: 90%;
	max-width: 50rem;
	margin: 0 auto;
`;

export const Heading1 = styled.h1`
	font-family: 'Montserrat', sans-serif;
	font-size: 3rem;
	line-height: 4.5rem;
`;

export const Heading2 = styled.h2`
	font-family: 'Montserrat', sans-serif;
	font-size: 2rem;
	line-height: 3rem;
	margin-top: 5rem;
`;

export const Heading3 = styled.h3`
	font-family: 'Montserrat', sans-serif;
	font-size: 1.5rem;
	line-height: 2.25rem;
	margin-top: 3rem;
`;

export const Heading4 = styled.h4`
	font-family: 'Montserrat', sans-serif;
	font-size: 1.25rem;
	line-height: 1.5625rem;
	margin-top: 3rem;
`;

export const Heading5 = styled.h5`
	font-family: 'Montserrat', sans-serif;
	font-size: 1.10rem;
	line-height: 1.375rem;
`;

export const Paragraph = styled.p``;


export const InlineV = styled.span`
	color: ${colors.purple5};
	font-size: 135%;
	font-family: "Vixa Geometric Bold", "Montserrat", sans-serif;
	font-variant-ligatures: discretionary-ligatures;
`;

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

export const Subtitle = styled(Heading2)`
	margin-top: 0;
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

CHART

*/

export const ChartSection = styled.div`
	padding: 0 1rem 1rem;
	position: relative;

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
		background-position: center center;
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

	@media only screen and (min-width: ${breakpoints.fourth}) {
		padding: 0 2rem 2rem;
	}
`;

export const ChartsContainer = styled.div`
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
	margin: 3rem auto;

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
	background: ${colors.neutral1};
	color: ${colors.neutral10};
	font-size: 3rem;
	line-height: 1.5;
	margin: 0 -2rem;
	padding: 3rem;
	text-align: center;

	${InlineV} {
		color: ${colors.purple7};
	}
`;

export const Filter = styled.div`
	background: ${colors.neutral2};
	display: flex;
	margin: 0 -2rem;
	justify-content: center;
	position: sticky;
	top: 0;
	z-index: 2;
`;

export const FilterOption = styled.button`
	background: ${colors.neutral2};
	border: none;
	color: ${colors.neutral10};
	cursor: pointer;
	flex: 0 0;
	font-family: "Montserrat", sans-serif;
	font-size: 1.25rem;
	font-weight: bold;
	line-height: 2rem;
	padding: 1rem;
`;

export const FilterOptions = styled.div``;

export const FilterTitle = styled.div``;

export const ChartSubtitle = styled(Heading3)`
	font-size: 2rem;
	line-height: 1.5;
	margin: 3rem 0;
	text-align: center;
`;

export const ChartHeaderCellWrapper = styled.th`
	display: ${props => props.isEmpty ? "none;" : "block"};
	color: ${colors.neutral4};
	flex: 1 0 100%;
	margin: 2rem 0 0.25rem;

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
	display: table-cell;
	height: 6rem;
	margin: 0.25rem;
	padding: 0.75rem;
	width: 6rem;

	${props => props.isEmpty && `
	> ${ChartCellVixa},
	> ${ChartCellTertiaryLine} {
		display: none;
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
	font-size: 1rem;
	line-height: 1rem;
	justify-content: center;
`;

export const ChartCellTertiaryLine = styled.div`
	color: ${colors.neutral4};
	display: flex;
	font-size: 1rem;
	line-height: 1rem;
	justify-content: space-between;
`;

export const ChartCellSecondLineItem = styled.div``;

export const ToC = styled.div``;

export const ToCList = styled.div``;

export const ToCTitle = styled(Heading5)`
	margin-bottom: 0.5rem;
`;

export const ToCItem = styled.div``;

export const BigLetter = styled.span`
	font-family: "Montserrat", sans-serif;
	font-size: 2.5rem;
	line-height: 3.75rem;
`;

export const BigLetterTable = styled.span`
	font-family: "Montserrat", sans-serif;
	font-size: 1.5rem;
	line-height: 2.25rem;
`;

export const BigQuoteText = styled.div`
	background: ${colors.green5};
	color: ${colors.neutral9};
	font-family: "Vixa Geometric Bold", "Montserrat", sans-serif;
	font-variant-ligatures: discretionary-ligatures;
	font-size: 2.5rem;
	line-height: 3.75rem;
	margin-top: 2rem;
	padding: 1rem 2rem;
`;

export const BigQuoteCaption = styled.div`
	color: ${colors.neutral4};
	font-size: 0.75rem;
	margin-top: 0.5rem;
	margin-bottom: 2rem;
`;

export const EgyptianCharacter = styled(BigLetter)`
	font-size: 6rem;
	margin-top: -4rem;
	margin-bottom: -2rem;
`;

export const StyledProtoSemiticAleph = styled(ProtoSemiticAleph)`
	width: 22px;
`;

export const CharacterCardColumn = styled.div`
    flex: 1 1 50%;

    :not(:last-child) {
        margin-bottom: 1.65rem;
    }

    @media only screen and (min-width: 35rem) {

        :not(:last-child) {
            border-right: 1px solid #ddd;
            padding-right: 2rem;
            margin-bottom: 0;
        }
    
        :not(:first-child) {
            padding-left: 2rem;
        }
    }
`;