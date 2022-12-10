import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import ConsonantsChart from './images/chart-consonants.svg';
import VowelsChart from './images/chart-vowels.svg';

import {
	BigLetter,
	BigLetterTable,
	BigQuoteText,
	BigQuoteCaption,
	EgyptianCharacter,
	Canvas,
	Content,
	ContentFullSize,
	ContentWide,
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
	Neutral4,
	NumberedList,
	Paragraph,
	StyledProtoSemiticAleph,
	Subtitle,
	SubtitleV,
	Table,
	TableCell,
	TableCellLetter,
	TableHeaderCell,
	TableRow,
	Title,
	ToC,
	ToCItem,
	ToCList,
	ToCTitle,
	NumberedListItem
} from './styles.js';

function TableRowLetter(props) {
	return (
		<TableRow>
			<TableCell><BigLetterTable><InlineV>{props.vishvaksara}</InlineV></BigLetterTable></TableCell>
			<TableCell><Neutral4>[{props.ipa}]</Neutral4></TableCell>
			<TableCell>{props.description}</TableCell>
		</TableRow>
	);
}

function BigQuote(props) {
	return (
		<>
			<BigQuoteText>{props.text}</BigQuoteText>
			<BigQuoteCaption>{props.caption}</BigQuoteCaption>
		</>
	);
}

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
					<Heading2>An alphabet that makes sense <InlineV>· ən elfəbet ðet méyks sens</InlineV></Heading2>
					<Paragraph>Vishvaksara is a <em>featural constructed alphabet,</em> where every part of a letter describes a certain feature of the sound that letter represents. Because of this system, the more similar two letters are, the more similar their sounds are. This makes it easier to learn than Latin.</Paragraph>
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
					<BigLetter>𐤀</BigLetter>
					<Paragraph> Then, hundreds of years later, the Greek developed a new script, basing it on the Phoenician script. For some reason, they decided to turn the Phoenician letter on its side. Now, the letter they called "alpha" looked like this:</Paragraph>
					<BigLetter>A</BigLetter>
					<Paragraph>Then the Etruscans copied it, and the Romans copied it, and it became the latin A we all know. People chiseled it, wrote it with pens, adapted it for the printing press and then displayed it on screens.</Paragraph>
					<Paragraph>When I'm writing this, it's currently the 21st century. There is a human-made robot traveling on the surface of Mars. The robot is called Perseverance. The "A" in its name looks like that because of... how someone chose to draw an ox 5000 years ago.</Paragraph>
					<Heading3>The benefits of featural alphabets <InlineV>· ðə benefits áf fičərəl elfəbets</InlineV></Heading3>
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
					<Paragraph>Vishvaksara writes syllables, not letters. This means that when a consonant is followed by a vowel, they get merged together into one syllable. The vowel becomes somewhat like a diacritic:</Paragraph>
					<BigLetter><InlineV>b + e = be</InlineV></BigLetter>
					<Heading2>Vishvaksara for English <InlineV>· ẃišẃákṣáŕá for ingliš</InlineV></Heading2>
					<Paragraph>Vishvaksara fully supports the English language, even its rare dental sounds: [θ] (th as in "thief"), and [ð] (th as in "the").</Paragraph>
				</Content>
				<ContentWide>
					<BigQuote
						text = "oll hyumən biingz ar born fri end ikwəl in digniti end ráyts."
						caption = 'Example text in General American English: "All human beings are born free and equal in dignity and rights."'
					/>
				</ContentWide>
				<Content>
					<Paragraph>Since English spelling often diverges from pronounciation, it can take time for English speakers to get used to writing with Vishvaksara. Additionally, each dialect needs to be written differently, since they sound different.</Paragraph>
					<Heading3>General American</Heading3>
					<Table>
						<TableRow>
							<TableHeaderCell>Letter</TableHeaderCell>
							<TableHeaderCell>IPA</TableHeaderCell>
							<TableHeaderCell>GA English sound</TableHeaderCell>
						</TableRow>
						<TableRowLetter
							ipa="æ"
							description='A as in "apple"'
							vishvaksara="e"
						/>
						<TableRowLetter
							ipa="ə"
							description='A as in "comma"'
							vishvaksara="ə"
						/>
						<TableRowLetter
							ipa="e"
							description='A as in "change"'
							vishvaksara="é"
						/>
						<TableRowLetter
							ipa="b"
							description='B as in "big"'
							vishvaksara="b"
						/>
						<TableRowLetter
							ipa="k"
							description='C as in "cat"'
							vishvaksara="k"
						/>
						<TableRowLetter
							ipa="tʃ"
							description='CH as in "cheap"'
							vishvaksara="č"
						/>
						<TableRowLetter
							ipa="x"
							description='CH as in "loch"'
							vishvaksara="x"
						/>
						<TableRowLetter
							ipa="d"
							description='D as in "dog"'
							vishvaksara="d"
						/>
						<TableRowLetter
							ipa="ɛ"
							description='E as in "echo"'
							vishvaksara="e"
						/>
						<TableRowLetter
							ipa="i"
							description='EE as in "bee"'
							vishvaksara="i"
						/>
						<TableRowLetter
							ipa="f"
							description='F as in "four"'
							vishvaksara="f"
						/>
						<TableRowLetter
							ipa="g"
							description='G as in "good"'
							vishvaksara="g"
						/>
						<TableRowLetter
							ipa="h"
							description='H as in "home"'
							vishvaksara="h"
						/>
						<TableRowLetter
							ipa="ɪ"
							description='I as in "kit"'
							vishvaksara="i"
						/>
						<TableRowLetter
							ipa="dʒ"
							description='J as in "job"'
							vishvaksara="j"
						/>
						<TableRowLetter
							ipa="k"
							description='K as in "kid"'
							vishvaksara="k"
						/>
						<TableRowLetter
							ipa="l"
							description='L as in "love"'
							vishvaksara="l"
						/>
						<TableRowLetter
							ipa="m"
							description='M as in "mother"'
							vishvaksara="m"
						/>
						<TableRowLetter
							ipa="n"
							description='N as in "nice"'
							vishvaksara="n"
						/>
						<TableRowLetter
							ipa="o"
							description='O as in "goat"'
							vishvaksara="o"
						/>
						<TableRowLetter
							ipa="a"
							description='O as in "comma"'
							vishvaksara="á"
						/>
						<TableRowLetter
							ipa="u"
							description='OO as in "foot"'
							vishvaksara="u"
						/>
						<TableRowLetter
							ipa="p"
							description='P as in "pet"'
							vishvaksara="p"
						/>
						<TableRowLetter
							ipa="r"
							description='R as in "ruckus"'
							vishvaksara="r"
						/>
						<TableRowLetter
							ipa="s"
							description='S as in "soup"'
							vishvaksara="s"
						/>
						<TableRowLetter
							ipa="t"
							description='T as in "tell"'
							vishvaksara="t"
						/>
						<TableRowLetter
							ipa="θ"
							description='TH as in "thing"'
							vishvaksara="θ"
						/>
						<TableRowLetter
							ipa="ð"
							description='TH as in "them"'
							vishvaksara="ð"
						/>
						<TableRowLetter
							ipa="v"
							description='V as in "vine"'
							vishvaksara="v"
						/>
						<TableRowLetter
							ipa="w"
							description='W as in "win"'
							vishvaksara="w"
						/>
						<TableRowLetter
							ipa="x"
							description='X as in "explain"'
							vishvaksara="w"
						/>
						<TableRowLetter
							ipa="j"
							description='Y as in "you"'
							vishvaksara="y"
						/>
						<TableRowLetter
							ipa="z"
							description='Z as in "zoom"'
							vishvaksara="z"
						/>
					</Table><Heading2>Vishvaksara for Hungarian <InlineV>· ẃišẃákṣáŕá for hángeriən</InlineV></Heading2>
					<Paragraph>Vishvaksara works excellently for Hungarian. Several digraphs and trigraphs, such as "ty," "gy," "ny," or "dzs" are single letters in Vishvaksara, making writing faster and simpler. It also gets rid of the difference between "j" and "ly," a pain point even for several native Hungarian speakers.</Paragraph>
				</Content>
				<ContentWide>
					<BigQuote
						text = "Minden embeŕi léñ sabadnak sületik, és eďenlö méltošága éš yoga van."
						caption = 'Example text in Hungarian: "Minden emberi lény szabadnak születik, és egyenlő méltósága és joga van."'
					/>
				</ContentWide>
				<Content>
					<Paragraph>Vishvaksara differentiates between the "h" in "méh" and the "h" in "hajnal."</Paragraph>
					<Heading3>General American</Heading3>
					<Table>
						<TableRow>
							<TableHeaderCell>Letter</TableHeaderCell>
							<TableHeaderCell>IPA</TableHeaderCell>
							<TableHeaderCell>GA English sound</TableHeaderCell>
						</TableRow>
						<TableRowLetter
							ipa="æ"
							description='A as in "apple"'
							vishvaksara="e"
						/>
						<TableRowLetter
							ipa="ə"
							description='A as in "comma"'
							vishvaksara="ə"
						/>
						<TableRowLetter
							ipa="e"
							description='A as in "change"'
							vishvaksara="é"
						/>
						<TableRowLetter
							ipa="b"
							description='B as in "big"'
							vishvaksara="b"
						/>
						<TableRowLetter
							ipa="k"
							description='C as in "cat"'
							vishvaksara="k"
						/>
						<TableRowLetter
							ipa="tʃ"
							description='CH as in "cheap"'
							vishvaksara="č"
						/>
						<TableRowLetter
							ipa="x"
							description='CH as in "loch"'
							vishvaksara="x"
						/>
						<TableRowLetter
							ipa="d"
							description='D as in "dog"'
							vishvaksara="d"
						/>
						<TableRowLetter
							ipa="ɛ"
							description='E as in "echo"'
							vishvaksara="e"
						/>
						<TableRowLetter
							ipa="i"
							description='EE as in "bee"'
							vishvaksara="i"
						/>
						<TableRowLetter
							ipa="f"
							description='F as in "four"'
							vishvaksara="f"
						/>
						<TableRowLetter
							ipa="g"
							description='G as in "good"'
							vishvaksara="g"
						/>
						<TableRowLetter
							ipa="h"
							description='H as in "home"'
							vishvaksara="h"
						/>
						<TableRowLetter
							ipa="ɪ"
							description='I as in "kit"'
							vishvaksara="i"
						/>
						<TableRowLetter
							ipa="dʒ"
							description='J as in "job"'
							vishvaksara="j"
						/>
						<TableRowLetter
							ipa="k"
							description='K as in "kid"'
							vishvaksara="k"
						/>
						<TableRowLetter
							ipa="l"
							description='L as in "love"'
							vishvaksara="l"
						/>
						<TableRowLetter
							ipa="m"
							description='M as in "mother"'
							vishvaksara="m"
						/>
						<TableRowLetter
							ipa="n"
							description='N as in "nice"'
							vishvaksara="n"
						/>
						<TableRowLetter
							ipa="o"
							description='O as in "goat"'
							vishvaksara="o"
						/>
						<TableRowLetter
							ipa="a"
							description='O as in "comma"'
							vishvaksara="á"
						/>
						<TableRowLetter
							ipa="u"
							description='OO as in "foot"'
							vishvaksara="u"
						/>
						<TableRowLetter
							ipa="p"
							description='P as in "pet"'
							vishvaksara="p"
						/>
						<TableRowLetter
							ipa="r"
							description='R as in "ruckus"'
							vishvaksara="r"
						/>
						<TableRowLetter
							ipa="s"
							description='S as in "soup"'
							vishvaksara="s"
						/>
						<TableRowLetter
							ipa="t"
							description='T as in "tell"'
							vishvaksara="t"
						/>
						<TableRowLetter
							ipa="θ"
							description='TH as in "thing"'
							vishvaksara="θ"
						/>
						<TableRowLetter
							ipa="ð"
							description='TH as in "them"'
							vishvaksara="ð"
						/>
						<TableRowLetter
							ipa="v"
							description='V as in "vine"'
							vishvaksara="v"
						/>
						<TableRowLetter
							ipa="w"
							description='W as in "win"'
							vishvaksara="w"
						/>
						<TableRowLetter
							ipa="x"
							description='X as in "explain"'
							vishvaksara="w"
						/>
						<TableRowLetter
							ipa="j"
							description='Y as in "you"'
							vishvaksara="y"
						/>
						<TableRowLetter
							ipa="z"
							description='Z as in "zoom"'
							vishvaksara="z"
						/>
					</Table>
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
