import styled from 'styled-components';
import { darken } from 'polished';

export const colors = {
    red4: '#BB4F32',
    yellow4: '#966800',
    green4: '#507C34',
    blue4: '#397A84',
    purple4: '#826693',
	neutral9: `#FFFFFF`,
    neutral4: '#707070',
	neutral1: `#1C1C1C`
}

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
	padding: 2rem;
`;

export const Heading1 = styled.h1`
	font-family: 'Montserrat', sans-serif;
	font-size: 3rem;
	line-height: 4rem;
`;

export const Heading2 = styled.h2`
	font-family: 'Montserrat', sans-serif;
	font-size: 2rem;
	line-height: 2.5rem;
`;

export const Paragraph = styled.p``;

export const Title = styled(Heading1)`
	margin-bottom: 0;
`;

export const Subtitle = styled(Heading2)`
	margin-top: 0;
`;

export const Etymology = styled.p`
	font-size: 1rem;
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