import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import ConsonantsChart from './images/chart-consonants.svg';
import VowelsChart from './images/chart-vowels.svg';

import {
	BigCharacter,
	EgyptianCharacter,
	Canvas,
	Content,
	Etymology,
	FullSizeImage,
	Header,
	Heading1,
	Heading2,
	Heading3,
	Heading4,
	Heading5,
	InlineV,
	Paragraph,
	StyledProtoSemiticAleph,
	Subtitle,
	SubtitleV,
	Title,
	ToC,
	ToCItem,
	ToCList,
	ToCTitle
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
					<Subtitle>An alphabet that makes sense <InlineV>· ən elfəbet ðet méyks sens</InlineV></Subtitle>
					<Paragraph>Vishvaksara is a featural constructed alphabet, where every part of a letter describes a certain feature of the sound that letter represents. Because of this system, the more similar two letters are, the more similar their sounds are. So if you misread a letter slightly, it will still be a similar sound to what's written.</Paragraph>
					<Paragraph>One letter in Vishvaksara describes exactly one sound. This makes reading and writing straightforward and easy, and makes it so you can pronounce words even if you don't understand them.</Paragraph>
					<Paragraph>Letterforms in Vishvaksara were chosen so that the most used sounds have the simplest letter shapes, so that writing is as fast as possible. Consonants can be written in a cursive-like way, without lifting the pen, and vowels can be omitted to make writing even faster, something like a shorthand.</Paragraph>
					<Paragraph>Vishvaksara is designed to be universal: it can be used to write the native languages of at least 3.6 billion people, including English, Mandarin, Yue, Wu, Hindi, Spanish and Standard Arabic.</Paragraph>
					<Paragraph>I designed Vishvaksara as a hobby, for fun. Maybe it could be useful for you as a cipher, or for a fictional language? You're free to use it for your non-commercial hobby projects if you credit me and link back to this page. If you want to use it commercially, contact me!</Paragraph>
					<ToC>
						<Heading4>Table of Contents</Heading4>
						<ToCList>
							<a href="/"><ToCTitle>Quick summary</ToCTitle></a>
							<a href="/"><ToCTitle>Introduction</ToCTitle></a>
							<a href="/"><ToCTitle>How does it work?</ToCTitle></a>
						</ToCList>
					</ToC>
					<Heading2>Quick summary <InlineV>· kwik sáməri</InlineV></Heading2>
					<Paragraph>First of all, here's the entire alphabet. It might look a bit intimidating at first, but don't worry - you only need a small subset for each language, and it'll all make sense later. First off, here are the consonants:</Paragraph>
				</Content>
				<FullSizeImage src={ConsonantsChart} alt="Consonants" />
				<Content>
					<Paragraph>And here are the vowels:</Paragraph>
				</Content>
				<FullSizeImage src={VowelsChart} alt="Vowels" />
				<Content>
					<Paragraph>Vowels work differently in Vishvaksara than in Latin: if a vowel comes after a consonant, they get merged together, so the vowel becomes somewhat like a diacritic:</Paragraph>
					<BigCharacter><InlineV>b + e = be</InlineV></BigCharacter>
					<Paragraph>That's the gist of it! But how do these letterforms make sense? Let me explain!</Paragraph>
					<Heading2>Introduction <InlineV>· intrədákšən</InlineV></Heading2>
					<Heading3>Who designed the latin alphabet? <InlineV>· hu dəzájnd ðə letən elfəbet?</InlineV></Heading3>
					<Paragraph>Have you ever wondered why letters look the way they do? For example, why does the latin letter "A" look like that? The answer sounded surprising to me.</Paragraph>
					<Paragraph>Turns out, a couple milennia ago, in Egyptian hieroglyphs, the word for "Ox" used to be represented by a drawing of a head of an ox, turned sideways:</Paragraph>
					<EgyptianCharacter>𓃾</EgyptianCharacter>
					<Paragraph>Then, in the 19-15th century BC, the Canaanites developed a new script for themselves, basing it on those Egyptian hieroglyphs. Their script described sounds, not concepts. For the sound "A", they chose the hieroglyph for "Ox", because the word for "Ox" sounded like "'alp" in Egyptian.</Paragraph>
					<StyledProtoSemiticAleph />
					<Paragraph> Then, hundreds of years later, the Phoenicians developed a new script, basing it on the Canaanite script. They simplified the shape even more. Now, the letter they called "ʾālep" looked like this:</Paragraph>
					<BigCharacter>𐤀</BigCharacter>
					<Paragraph> Then, hundreds of years later, the Greek developed a new script, basing it on the Phoenician script. For some reason, they decided to turn the Phoenician letter on its side. Now, the letter they called "alpha" looked like this:</Paragraph>
					<BigCharacter>A</BigCharacter>
					<Paragraph>Then the Etruscans copied it, and the Romans copied it, and it became the latin A we all know. People chiseled it, wrote it with pens, adapted it for the printing press and then displayed it on screens.</Paragraph>
					<Paragraph>When I'm writing this, it's currently the 21st century. There is a human-made robot traveling on the surface of Mars. The robot is called Perseverance. The "A" in its name looks like that because of... how someone chose to draw an ox 5000 years ago.</Paragraph>
					<Heading3>Why does this matter? <InlineV>· hwáy daz ðis mettər?</InlineV></Heading3>
					<Paragraph>I work in user experience design. My job is to design things so that people can easily understand and use them.</Paragraph>
					<Paragraph>Perhaps the most important principle in user experience design is consistency. One aspect of consistency is that if two things are similar, they should appear similar.</Paragraph>
					<Paragraph>Most alphabets don't seem to follow this principle at all, since they weren't designed to. They just evolved naturally, over time. Because of this, similar sounds, like "k" and "g", can look completely different. Sometimes the same letter even denotes an entirely different sound - just compare the "e" letters in "different."</Paragraph>
					<Paragraph>Naturally, we have grown accustomed to these inconsistencies. We can read and write pretty well regardless. But this got me thinking - what if we had an alphabet that <em>was</em> consistent? Would that be possible?</Paragraph>
					<Paragraph>The answer is - of course it would. There are already several featural alphabets that are based on logical rules - an example might be Hangul, the alphabet used to write Korean. And, in my experience, this system works! I found Hangul extremely easy to learn, because of this underlying logic. But... would it be possible to design a featural alphabet that works for all languages? Or, at least, most of them?</Paragraph>
					<Paragraph>I decided to try.</Paragraph>
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
