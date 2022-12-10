import styled from 'styled-components/macro';
import { darken } from 'polished';

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

export const colors = {
    red4: '#BB4F32',
    yellow4: '#966800',
    green4: '#507C34',
    blue4: '#397A84',
    purple4: '#826693',
	neutral9: `#FFFFFF`,
	neutral7: `#C4C4C4`,
    neutral4: '#707070',
	neutral1: `#1C1C1C`
}

export const Neutral4 = styled.span`
	color: ${colors.neutral4};
`;

export const Canvas = styled.div`
    box-sizing: border-box;
    width: 100%;
`;

export const Header = styled.div`
    background-color: ${colors.purple4};
	color: ${colors.neutral9};
	font-size: 2rem;
	line-height: 1.75rem;
	padding: 1rem;
	text-align: center;
`;

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

export const Title = styled(Heading1)`
	font-family: "Vishvaksara Geometric Bold";
	font-size: 8rem;
	line-height: 12rem;
	font-variant-ligatures: discretionary-ligatures;
	margin-bottom: 0;
	margin-top: 1rem;
`;

export const Subtitle = styled(Heading2)`
	margin-top: 0;
`;

export const InlineV = styled.span`
	color: ${colors.blue4};
	font-size: 135%;
	font-family: "Vishvaksara Geometric Bold", "Montserrat", sans-serif;
	font-variant-ligatures: discretionary-ligatures;
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

export const Table = styled.table`
	width: 100%;
	margin-top: 2rem;
`;

export const TableHeaderCell = styled.th`
	border-bottom: 1px solid ${colors.neutral7};
	color: ${colors.neutral4};
	font-family: "Montserrat", sans-serif;
	font-size: 0.75rem;
	text-align: left;
	text-transform: uppercase;
	padding: 0.5rem;

	&:first-of-type {
		padding-left: 0;
	}

	&:last-of-type {
		padding-right: 0;
	}
`;

export const TableRow = styled.tr``;

export const TableCell = styled.td`
	padding: 0.5rem;

	&:first-of-type {
		padding-left: 0;
	}

	&:last-of-type {
		padding-right: 0;
	}
`;

export const ToC = styled.div``;

export const ToCList = styled.div``;

export const ToCTitle = styled(Heading5)`
	margin-bottom: 0.5rem;
`;

export const ToCItem = styled.div``;

export const Etymology = styled.p`
	font-size: 1rem;
`;

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
background: ${colors.blue4};
color: ${colors.neutral9};
font-family: "Vishvaksara Geometric Bold", "Montserrat", sans-serif;
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