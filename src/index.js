import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import {
	BigCharacter,
	EgyptianCharacter,
	Canvas,
	Content,
	Etymology,
	Header,
	Heading1,
	Heading2,
	Heading3,
	Paragraph,
	StyledProtoSemiticAleph,
	Subtitle,
	Title
} from './styles.js';

class Page extends React.Component {

    constructor(props) {

        super(props);
    }

    render() {

        return (
            <Canvas>
				<Header>
					<Title>ẃixẃákṣáŕá</Title>
					<Subtitle>vishvaksara</Subtitle>
					<Etymology>From Sanskrit viśva विश्व (universal) <br/>+ akṣara अक्षर (syllable).</Etymology>
				</Header>
				<Content>
					<Subtitle>An alphabet that makes sense</Subtitle>
					<Heading3>Who designed the latin alphabet?</Heading3>
					<Paragraph>Have you ever wondered why letters look the way they do? For example, why does the latin letter "A" look like that? The answer sounded surprising to me.</Paragraph>
					<Paragraph>Turns out, a couple milennia ago, in Egyptian hieroglyphs, the word for "Ox" used to be represented by a drawing of a head of an ox, turned sideways:</Paragraph>
					<EgyptianCharacter>𓃾</EgyptianCharacter>
					<Paragraph>Then, in the 19-15th century BC, the Canaanites developed a new script for themselves, basing it on those Egyptian hieroglyphs. Their script described sounds, not concepts. For the sound "A", they chose the hieroglyph for "Ox", because the word for "Ox" sounded like "'alp" in Egyptian.</Paragraph>
					<StyledProtoSemiticAleph />
					<Paragraph> Then, hundreds of years later, the Phoenicians developed a new script, basing it on the Canaanite script. They simplified the shape even more. Now, the letter they called "ʾālep" looked like this:</Paragraph>
					<BigCharacter>𐤀</BigCharacter>
					<Paragraph> Then, hundreds of years later, the Greek developed a new script, basing it on the Phoenician script. For some reason, they decided to turn the Phoenician letter on its side. Now, the letter they called "alpha" looked like this: A.</Paragraph>
					<BigCharacter>A</BigCharacter>
					<Paragraph> Then, hundreds of years later, the Etruscans developed a new script, basing it on the Greek script. Their version of this letter looked like:</Paragraph>
					<BigCharacter>𐌀</BigCharacter>
					<Paragraph> Then, hundreds of years later, the Romans developed a new script, basing it on the Etruscan script. Their version of the letter:</Paragraph>
					<BigCharacter>A</BigCharacter>
					<Paragraph>When I'm writing this, it's currently the 21st century. There is a human-made robot traveling on the surface of Mars. The robot is called Perseverance. The "A" in its name looks like that because of... how someone chose to draw an ox 5000 years ago.</Paragraph>
				</Content>
            </Canvas> 
        );
    }
}

// ========================================

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);
