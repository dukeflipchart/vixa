import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import {
	Canvas,
	Content,
	Etymology,
	Header,
	Heading1,
	Heading2,
	Paragraph,
	Subtitle,
	Title
} from './styles.js'

class Page extends React.Component {

    constructor(props) {

        super(props);
    }

    render() {

        return (
            <Canvas>
				<Header>
					<Title>vishvaksara</Title>
					<Etymology>From Sanskrit viśva विश्व (universal) <br/>+ akṣara अक्षर (syllable).</Etymology>
				</Header>
				<Content>
					<Subtitle>An alphabet that makes sense</Subtitle>
					<Paragraph>Have you ever wondered why letters look the way they do? For example, why does the latin letter "A" look like that? The answer is actually pretty wild.</Paragraph>
					<Paragraph>A couple milennia ago, in Egyptian hieroglyphs, the word for "Ox" used to be represented by a drawing of a head of an ox, turned sideways: 𓃾.</Paragraph>
					<Paragraph>In the 19-15th century BC, the Canaanites developed a new script for themselves, basing it on those Egyptian hieroglyphs. Their script described sounds, not concepts. For the sound "A", they chose the hieroglyph for "Ox", because the word for "Ox" sounded like "'alp" in Egyptian.</Paragraph>
					<Paragraph> Then, hundreds of years later, the Phoenicians developed a new script, basing it on the Canaanite script. They simplified the shape even more. Now, the letter they called "ʾālep" looked like this: 𐤀</Paragraph>
					<Paragraph> Then, hundreds of years later, the Greek developed a new script, basing it on the Phoenician script. They decided to turn the Phoenician letter on its side. Now, the letter they called "alpha" looked like this: A.</Paragraph>
					<Paragraph> Then, hundreds of years later, the Etruscans developed a new script, basing it on the Greek script. Their version of this letter looked like: 𐌀.</Paragraph>
					<Paragraph> Then, hundreds of years later, the Romans developed a new script, basing it on the Etruscan script. Their version of the letter: A.</Paragraph>
					<Paragraph>When I'm writing this, it's currently the 21st century. There is a human-made robot traveling on the surface of Mars. The robot is called Perseverance. The "A" in its name looks like that because that's how someone drew an ox 5000 years ago.</Paragraph>
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
