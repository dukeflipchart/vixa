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
	ContentFullSize,
	Etymology,
	Header,
	Heading1,
	Heading2,
	Heading3,
	Heading4,
	Heading5,
	Image,
	ImageWithBorder,
	InlineV,
	NumberedList,
	Paragraph,
	StyledProtoSemiticAleph,
	Subtitle,
	SubtitleV,
	Title,
	ToC,
	ToCItem,
	ToCList,
	ToCTitle,
	NumberedListItem
} from './styles.js';

class Page extends React.Component {

    constructor(props) {

        super(props);
    }

    render() {

        return (
            <Canvas>
				<Header>
					<Title>ẃišẃákṣáŕá</Title>
					<Subtitle>vishvaksara</Subtitle>
					<Etymology>From Sanskrit viśva विश्व (universal) <br/>+ akṣara अक्षर (syllable).</Etymology>
				</Header>
				<Content>
					<Subtitle>An alphabet that makes sense <InlineV>· ən elfəbet ðet méyks sens</InlineV></Subtitle>
					<Paragraph>Vishvaksara is a featural constructed alphabet, where every part of a letter describes a certain feature of the sound that letter represents. Because of this system, the more similar two letters are, the more similar their sounds are. This makes it easier to learn than Latin.</Paragraph>
					<Paragraph>One letter in Vishvaksara describes exactly one sound. This makes reading and writing straightforward and easy, and makes it so you can pronounce words even if you don't understand them.</Paragraph>
					<Paragraph>Letterforms in Vishvaksara were chosen so that the most used sounds have the simplest letter shapes, so that writing is as fast as possible. Consonants can be written in a cursive-like way, without lifting the pen, and vowels can be omitted to make writing even faster, something like a shorthand.</Paragraph>
					<Paragraph>Vishvaksara is designed to be universal: it can be used to write the native languages of at least 3.6 billion people, including English, Mandarin, Yue, Wu, Hindi, Spanish and Standard Arabic.</Paragraph>
					<Paragraph>I designed Vishvaksara as a hobby, for fun. Maybe it could be useful for you as a cipher, or for a fictional language? You're free to use it for your non-commercial hobby projects if you credit me and link back to this page. If you want to use it commercially, contact me!</Paragraph>
					<ToC>
						<Heading4>Table of Contents</Heading4>
						<ToCList>
							<a href="/"><ToCTitle>Introduction</ToCTitle></a>
							<a href="/"><ToCTitle>The benefit of featural alphabets</ToCTitle></a>
							<a href="/"><ToCTitle>Design goals</ToCTitle></a>
							<a href="/"><ToCTitle>Quick summary</ToCTitle></a>
						</ToCList>
					</ToC>
					<Heading2>Introduction <InlineV>· intrədákšən</InlineV></Heading2>
					<Heading3>The origins of the latin alphabet <InlineV>· ðə orijənz áf ðə letən elfəbet</InlineV></Heading3>
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
					<Heading3>The benefit of featural alphabets <InlineV>· ðə benefit áf fičərəl elfəbets</InlineV></Heading3>
					<Paragraph>I work in user experience design. My job is to design things so that people can easily understand and use them.</Paragraph>
					<Paragraph>Perhaps the most important principle in user experience design is <em>consistency</em>. One aspect of consistency is that if two things are similar, they should appear similar.</Paragraph>
					<Paragraph>Most alphabets don't seem to follow this principle at all, since they weren't designed to. They just evolved naturally, over time. Because of this, similar sounds, like "k" and "g", can look completely different. Sometimes the same letter even denotes an entirely different sound - just compare the "e" letters in the word "different."</Paragraph>
					<Paragraph>Naturally, we have grown accustomed to these inconsistencies. We can read and write pretty well regardless. But this got me thinking - what if we had an alphabet that <em>was</em> consistent? Would that be possible?</Paragraph>
					<Paragraph>The answer is - of course it would. There are already several featural alphabets that are based on logical rules - an example might be Hangul, the alphabet used to write Korean. And, in my experience, this system works! I found Hangul extremely easy to learn, because of this underlying logic.</Paragraph>
					<Paragraph>I decided to try designing a featural alphabet that can be used for most of the languages in the world.</Paragraph>
					<Heading3>Design goals <InlineV>· dizájn gols</InlineV></Heading3>
					<Paragraph>When starting out with any design project, it's very important to be clear on what the goals are. My goals, in order of priority, were to make Vishvaksara</Paragraph>
					<NumberedList>
						<NumberedListItem>easy to learn,</NumberedListItem>
						<NumberedListItem>easy to read,</NumberedListItem>
						<NumberedListItem>universal and</NumberedListItem>
						<NumberedListItem>fast to write.</NumberedListItem>
					</NumberedList>
					<Paragraph>In order for it to be easy to learn, I wanted to make it featural: each feature of a letterform should correspond to a feature of the sound it represents.</Paragraph>
					<Paragraph>In order for it to be easy to read, I wanted to make letterforms as distinct from each other as possible.</Paragraph>
					<Paragraph>By "universal," I mean that it should be usable for the native languages of as much people as possible.</Paragraph>
					<Paragraph>To make it fast to write, I designed the letters in a way that they can be written cursively, without lifting the pen. I applied a method that is used in file compression: the most frequently used types of sounds are represented by the simplest letterforms. I also made it so that vowels can be omitted, similarly to Hebrew, making writing even faster when needed.</Paragraph>
					<Heading2>Quick summary <InlineV>· kwik sáməri</InlineV></Heading2>
					<Paragraph>Here's a full table of the entire alphabet.</Paragraph><Paragraph>These are all the consonants:</Paragraph>
				</Content>
				<ContentFullSize>
					<ImageWithBorder src={ConsonantsChart} alt="Consonants" />
				</ContentFullSize>
				<Content>
					<Paragraph>And these are the vowels:</Paragraph>
				</Content>
				<ContentFullSize>
					<ImageWithBorder src={VowelsChart} alt="Vowels" />
				</ContentFullSize>
				<Content>
					<Paragraph>Vishvaksara writes syllables, not letters. If a consonant is followed by a vowel, they get merged together into one syllable, so the vowel becomes somewhat like a diacritic:</Paragraph>
					<BigCharacter><InlineV>b + e = be</InlineV></BigCharacter>
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
