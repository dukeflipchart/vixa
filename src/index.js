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
			<TableCell><BigLetterTable><InlineV>{props.vixa}</InlineV></BigLetterTable></TableCell>
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
					<Title><InlineV>viksa</InlineV>·vixa</Title>
					<Etymology>From Sanskrit viśva विश्व (universal) <br/>+ akṣara अक्षर (syllable).</Etymology>
				</Header>
				<Content>
					<Heading2>An alphabet that makes sense <InlineV><br/>ən elfəbet ðet méyks sens</InlineV></Heading2>
					<Paragraph>Vixa is a <em>featural constructed alphabet,</em> where every part of a letter describes a certain feature of the sound that letter represents. Because of this system, the more similar two letters are, the more similar their sounds are. This makes it easier to learn than Latin.</Paragraph>
					<Paragraph>One letter in Vixa describes exactly one sound. This makes reading and writing straightforward and easy, and makes it so you can pronounce words even if you don't understand them.</Paragraph>
					<Paragraph>Letterforms in Vixa were chosen so that the most used sounds have the simplest letter shapes, so that writing is as fast as possible. Consonants can be written in a cursive-like way, without lifting the pen, and vowels can be omitted to make writing even faster, something like a shorthand.</Paragraph>
					<Paragraph>Vixa is designed to be universal: it can be used to write the native languages of at least 3.6 billion people, including English, Mandarin, Yue, Wu, Hindi, Spanish and Standard Arabic.</Paragraph>
					<Paragraph>I designed Vixa as a hobby, for fun. Maybe it could be useful for you as a cipher, or for a fictional language? You're free to use it for your non-commercial hobby projects if you credit me and link back to this page. If you want to use it commercially, contact me!</Paragraph>
					<ToC>
						<Heading4>Table of Contents</Heading4>
						<ToCList>
							<a href="/"><ToCTitle>Introduction</ToCTitle></a>
							<a href="/"><ToCTitle>Featural alphabets</ToCTitle></a>
							<a href="/"><ToCTitle>Design goals</ToCTitle></a>
							<a href="/"><ToCTitle>Quick summary</ToCTitle></a>
						</ToCList>
					</ToC>
					<Heading2>Introduction <InlineV><br/>intrədákšən</InlineV></Heading2>
					<Heading3>The origins of the latin alphabet <InlineV><br/>ðə orijənz áf ðə letən elfəbet</InlineV></Heading3>
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
					<Heading3>Featural alphabets <InlineV><br/>fičərəl elfəbets</InlineV></Heading3>
					<Paragraph>I work in user experience design. My job is to design things so that people can easily understand and use them.</Paragraph>
					<Paragraph>Perhaps the most important principle in user experience design is <em>consistency</em>. One aspect of consistency is that if two things are similar, they should appear similar.</Paragraph>
					<Paragraph>Most alphabets don't seem to follow this principle at all, since they weren't designed to. They just evolved naturally, over time. Because of this, similar sounds, like "k" and "g", can look completely different. Sometimes the same letter even denotes an entirely different sound - just compare the "e" letters in the word "different."</Paragraph>
					<Paragraph>Naturally, we have grown accustomed to these inconsistencies. We can read and write pretty well regardless. But this got me thinking - what if we had an alphabet that <em>was</em> consistent? Would that be possible?</Paragraph>
					<Paragraph>Of course it would. There are already several featural alphabets that are based on logical rules - an example might be Hangul, the alphabet used to write Korean. And, in my experience, this system works! I found Hangul extremely easy to learn, because of this underlying logic.</Paragraph>
					<Paragraph>I decided to try designing a featural alphabet that can be used for most of the languages in the world.</Paragraph>
					<Heading3>Design goals <InlineV><br/>dizáyn gols</InlineV></Heading3>
					<Paragraph>When starting out with any design project, it's very important to be clear on what the goals are. My goals, in order of priority, were to make Vixa</Paragraph>
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
					<Heading2>Quick summary <InlineV><br/>kwik sáməri</InlineV></Heading2>
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
					<Paragraph>Vixa writes syllables, not letters. This means that when a consonant is followed by a vowel, they get merged together into one syllable. The vowel becomes somewhat like a diacritic:</Paragraph>
					<BigLetter><InlineV>b + e = be</InlineV></BigLetter>
					<Heading2>Vixa for English <InlineV><br/> viksa for ingliš</InlineV></Heading2>
					<Paragraph>Vixa fully supports the English language, even its rare dental sounds: [θ] (th as in "thief"), and [ð] (th as in "the").</Paragraph>
				</Content>
				<ContentWide>
					<BigQuote
						text = "oll hyumən biingz ar born fri end ikwəl in digniti end ráyts."
						caption = 'Example text in General American English: "All human beings are born free and equal in dignity and rights."'
					/>
				</ContentWide>
				<Content>
					<Paragraph>Since English spelling often diverges from pronounciation, it can take time for English speakers to get used to writing with Vixa. Additionally, each dialect needs to be written differently, since they sound different.</Paragraph>
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
							vixa="e"
						/>
						<TableRowLetter
							ipa="ə"
							description='A as in "comma"'
							vixa="ə"
						/>
						<TableRowLetter
							ipa="e"
							description='A as in "way"'
							vixa="é"
						/>
						<TableRowLetter
							ipa="b"
							description='B as in "big"'
							vixa="b"
						/>
						<TableRowLetter
							ipa="k"
							description='C as in "cat"'
							vixa="k"
						/>
						<TableRowLetter
							ipa="tʃ"
							description='CH as in "cheap"'
							vixa="č"
						/>
						<TableRowLetter
							ipa="x"
							description='CH as in "loch"'
							vixa="x"
						/>
						<TableRowLetter
							ipa="d"
							description='D as in "dog"'
							vixa="d"
						/>
						<TableRowLetter
							ipa="ɛ"
							description='E as in "echo"'
							vixa="e"
						/>
						<TableRowLetter
							ipa="i"
							description='EE as in "bee"'
							vixa="i"
						/>
						<TableRowLetter
							ipa="f"
							description='F as in "four"'
							vixa="f"
						/>
						<TableRowLetter
							ipa="g"
							description='G as in "good"'
							vixa="g"
						/>
						<TableRowLetter
							ipa="h"
							description='H as in "home"'
							vixa="h"
						/>
						<TableRowLetter
							ipa="ɪ"
							description='I as in "kit"'
							vixa="i"
						/>
						<TableRowLetter
							ipa="d͡ʒ"
							description='J as in "job"'
							vixa="j"
						/>
						<TableRowLetter
							ipa="k"
							description='K as in "kid"'
							vixa="k"
						/>
						<TableRowLetter
							ipa="l"
							description='L as in "love"'
							vixa="l"
						/>
						<TableRowLetter
							ipa="m"
							description='M as in "mother"'
							vixa="m"
						/>
						<TableRowLetter
							ipa="n"
							description='N as in "nice"'
							vixa="n"
						/>
						<TableRowLetter
							ipa="o"
							description='O as in "goat"'
							vixa="o"
						/>
						<TableRowLetter
							ipa="a"
							description='O as in "comma"'
							vixa="á"
						/>
						<TableRowLetter
							ipa="u"
							description='OO as in "foot"'
							vixa="u"
						/>
						<TableRowLetter
							ipa="p"
							description='P as in "pet"'
							vixa="p"
						/>
						<TableRowLetter
							ipa="r"
							description='R as in "ruckus"'
							vixa="r"
						/>
						<TableRowLetter
							ipa="s"
							description='S as in "soup"'
							vixa="s"
						/>
						<TableRowLetter
							ipa="t"
							description='T as in "tell"'
							vixa="t"
						/>
						<TableRowLetter
							ipa="θ"
							description='TH as in "thing"'
							vixa="θ"
						/>
						<TableRowLetter
							ipa="ð"
							description='TH as in "them"'
							vixa="ð"
						/>
						<TableRowLetter
							ipa="v"
							description='V as in "vine"'
							vixa="v"
						/>
						<TableRowLetter
							ipa="w"
							description='W as in "win"'
							vixa="w"
						/>
						<TableRowLetter
							ipa="ks"
							description='X as in "explain"'
							vixa="ks"
						/>
						<TableRowLetter
							ipa="j"
							description='Y as in "you"'
							vixa="y"
						/>
						<TableRowLetter
							ipa="z"
							description='Z as in "zoom"'
							vixa="z"
						/>
					</Table><Heading2>Vixa for Hungarian <InlineV><br/>viksa for hángeriən</InlineV></Heading2>
					<Paragraph>Vixa works excellently for Hungarian. Several digraphs and trigraphs, such as "ty," "gy," "ny," or "dzs" are
						single letters in Vixa, making writing faster and simpler. It also gets rid of the difference between "j" and "ly,"
						a pain point even for several native Hungarian speakers.
					</Paragraph>
				</Content>
				<ContentWide>
					<BigQuote
						text = "Minden embeŕi léñ sabadnak sületik, és eďenlö méltošága éš yoga van."
						caption = 'Example text in Hungarian: "Minden emberi lény szabadnak születik, és egyenlő méltósága és joga van."'
					/>
				</ContentWide>
				<Content>
					<Heading3>Hungarian</Heading3>
					<Table>
						<TableRow>
							<TableHeaderCell>Letter</TableHeaderCell>
							<TableHeaderCell>IPA</TableHeaderCell>
							<TableHeaderCell>Hungarian sound</TableHeaderCell>
						</TableRow>
						<TableRowLetter
							ipa="ɒ"
							description='A as in "ad"'
							vixa="a"
						/>
						<TableRowLetter
							ipa="a"
							description='Á as in "ár"'
							vixa="á"
						/>
						<TableRowLetter
							ipa="b"
							description='B as in "báj"'
							vixa="b"
						/>
						<TableRowLetter
							ipa="t͡s"
							description='C as in "cél"'
							vixa="c"
						/>
						<TableRowLetter
							ipa="t͡ʃ"
							description='CS as in "csel"'
							vixa="č"
						/>
						<TableRowLetter
							ipa="d"
							description='D as in "dob"'
							vixa="d"
						/>
						<TableRowLetter
							ipa="d͡z"
							description='DZ as in "edző"'
							vixa="ź"
						/>
						<TableRowLetter
							ipa="d͡ʒ"
							description='DZS as in "dzsessz"'
							vixa="j"
						/>
						<TableRowLetter
							ipa="ɛ"
							description='E as in "egy"'
							vixa="e"
						/>
						<TableRowLetter
							ipa="e"
							description='É as in "ég"'
							vixa="é"
						/>
						<TableRowLetter
							ipa="f"
							description='F as in "fog"'
							vixa="f"
						/>
						<TableRowLetter
							ipa="g"
							description='G as in "gép"'
							vixa="g"
						/>
						<TableRowLetter
							ipa="ɟ"
							description='GY as in "gyöngy"'
							vixa="ď"
						/>
						<TableRowLetter
							ipa="h"
							description='H as in "hó"'
							vixa="h"
						/>
						<TableRowLetter
							ipa="i"
							description='I as in "itt"'
							vixa="i"
						/>
						<TableRowLetter
							ipa="iː"
							description='Í as in "így"'
							vixa="ii"
						/>
						<TableRowLetter
							ipa="j"
							description='J as in "jó"'
							vixa="y"
						/>
						<TableRowLetter
							ipa="k"
							description='K as in "kedv"'
							vixa="k"
						/>
						<TableRowLetter
							ipa="l"
							description='L as in "ló"'
							vixa="l"
						/>
						<TableRowLetter
							ipa="j"
							description='LY as in "lyuk"'
							vixa="y"
						/>
						<TableRowLetter
							ipa="m"
							description='M as in "ma"'
							vixa="m"
						/>
						<TableRowLetter
							ipa="n"
							description='N as in "nem"'
							vixa="n"
						/>
						<TableRowLetter
							ipa="ɲ"
							description='NY as in "nyár"'
							vixa="ñ"
						/>
						<TableRowLetter
							ipa="o"
							description='O as in "ott"'
							vixa="o"
						/>
						<TableRowLetter
							ipa="o"
							description='Ó as in "óv"'
							vixa="oo"
						/>
						<TableRowLetter
							ipa="ø"
							description='Ö as in "öv"'
							vixa="ö"
						/>
						<TableRowLetter
							ipa="øː"
							description='Ő as in "őr"'
							vixa="öö"
						/>
						<TableRowLetter
							ipa="p"
							description='P as in "pipa"'
							vixa="p"
						/>
						<TableRowLetter
							ipa="r"
							description='R as in "raj"'
							vixa="ŕ"
						/>
						<TableRowLetter
							ipa="ʃ"
							description='S as in "só"'
							vixa="š"
						/>
						<TableRowLetter
							ipa="s"
							description='SZ as in "szó"'
							vixa="s"
						/>
						<TableRowLetter
							ipa="t"
							description='T as in "tan"'
							vixa="t"
						/>
						<TableRowLetter
							ipa="c"
							description='TY as in "tyúk"'
							vixa="t"
						/>
						<TableRowLetter
							ipa="u"
							description='U as in "un"'
							vixa="u"
						/>
						<TableRowLetter
							ipa="uː"
							description='Ú as in "úgy"'
							vixa="uu"
						/>
						<TableRowLetter
							ipa="y"
							description='Ü as in "ül"'
							vixa="ü"
						/>
						<TableRowLetter
							ipa="yː"
							description='Ű as in "űr"'
							vixa="üü"
						/>
						<TableRowLetter
							ipa="v"
							description='V as in "vág"'
							vixa="v"
						/>
						<TableRowLetter
							ipa="z"
							description='Z as in "zöld"'
							vixa="z"
						/>
						<TableRowLetter
							ipa="ʒ"
							description='ZS as in "zseb"'
							vixa="ž"
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
