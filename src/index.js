import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import chartData from './chart.json';

import {
	BigLetter,
	BigQuoteText,
	BigQuoteCaption,
	EgyptianCharacter,
	Canvas,
	ChartBody,
	ChartSection,
	ChartWrapper,
	ChartCellWrapper,
	ChartCellVixa,
	ChartCellTertiaryLine,
	ChartCellSecondLineItem,
	ChartCellSecondaryLine,
	ChartContainer,
	ChartHead,
	ChartHeaderCellWrapper,
	ChartSubtitle,
	ChartTitle,
	ChartsContainer,
	Content,
	ContentSection,
	ContentSectionContent,
	ContentSectionTitle,
	FilterWrapper,
	FilterButton,
	FilterOptions,
	Etymology,
	Header,
	Heading2,
	Heading3,
	Heading4,
	InlineV,
	IntroSection,
	IntroSectionCellHeading,
	IntroSectionCellHeadingLatin,
	IntroSectionCellHeadingV,
	IntroSectionCellWrapper,
	IntroSectionCellParagraph,
	IntroSectionGrid,
	NumberedList,
	Paragraph,
	ParagraphBig,
	StyledChartRow,
	StyledProtoSemiticAleph,
	Title,
	NumberedListItem
} from './styles.js';

function BigQuote(props) {
	return (
		<>
			<BigQuoteText>{props.text}</BigQuoteText>
			<BigQuoteCaption>{props.caption}</BigQuoteCaption>
		</>
	);
}

function IntroSectionCell(props) {
	return (
		<>
			<IntroSectionCellWrapper isBig={props.isBig}>
				<IntroSectionCellHeading isBig={props.isBig}>
					<IntroSectionCellHeadingV>
						{props.headingVixa}
					</IntroSectionCellHeadingV>
					<IntroSectionCellHeadingLatin>
						{props.heading}
					</IntroSectionCellHeadingLatin>
				</IntroSectionCellHeading>
				<IntroSectionCellParagraph>
						{props.paragraph}
				</IntroSectionCellParagraph>
			</IntroSectionCellWrapper>
		</>
	)
}

const ChartRow = ({ children, isVisible }) => {
	return <StyledChartRow isVisible={isVisible}>{children}</StyledChartRow>;
};

function ChartCell(props) {
	return (
		<>
			<ChartCellWrapper isEmpty={props.isEmpty}>
				<ChartCellVixa>{props.vixaCharacter}</ChartCellVixa>
				{props.languageDescription ? (
					<ChartCellSecondaryLine>{props.languageDescription}</ChartCellSecondaryLine>
				) : (
					<ChartCellTertiaryLine>
						<ChartCellSecondLineItem>[{props.ipaCharacter}]</ChartCellSecondLineItem>
						<ChartCellSecondLineItem>{props.vixaCharacter}</ChartCellSecondLineItem>
					</ChartCellTertiaryLine>
				)}
			</ChartCellWrapper>
		</>
	)
}

function ChartHeaderCell(props) {
	return (
		<>
			<ChartHeaderCellWrapper isEmpty={props.isEmpty} isVisible={props.isVisible}>
				{props.text}<br/>{props.description}
			</ChartHeaderCellWrapper>
		</>
	)
}

function ChartNew(props) {

	const visiblePlaceCategories = chartData.placeCategories.filter(
		placeCategory =>
			(props.selectedLanguage === "all" || placeCategory.languages.includes(props.selectedLanguage)) &&
			placeCategory.type === props.type
	);

	return (
		<ChartWrapper>
			<ChartHead>
				{/* display top row with place categories */}
				<ChartRow isVisible>
					<ChartHeaderCell isEmpty /> {/* top left cell is always empty */}
					{visiblePlaceCategories.map((itemCell, indexCell) => (
						<ChartHeaderCell
							key={indexCell}
							text={itemCell.text}
							description={itemCell.textSecondLine}
						/>
					))}
				</ChartRow>
			</ChartHead>
			<ChartBody>
				{chartData.methodCategories
					.filter(
						methodCategory =>
							(props.selectedLanguage === "all" || methodCategory.languages.includes(props.selectedLanguage)) &&
							methodCategory.type === props.type
							
					) // for every row...
					.map((itemMethodCategory, indexMethodCategory) => {

						// get all the characters to display
						const characters = chartData.characters.filter(
							character =>
								(props.selectedLanguage === "all" || character.languages.some(language => language.id === props.selectedLanguage)) &&
								character.methodCategory === itemMethodCategory.id &&
								character.type === props.type
						);
						
						// put them in the correct place in the row
						const characterMap = {};
						characters.forEach(character => {
							characterMap[character.placeCategory] = character;
						});

						// return all cells in the row, either with a character or empty
						const visibleCells = visiblePlaceCategories.map((placeCategory, indexCell) => {
							const character = characterMap[placeCategory.id];
							return (
								character ?
									<ChartCell
										key={indexCell}
										ipaCharacter={character.ipaCharacter}
										vixaCharacter={character.vixaCharacter}
										languageDescription={character.languages?.find(language => language.id === props.selectedLanguage)?.description}
									/>
									: <ChartCell key={indexCell} isEmpty />
							);
						});

						// the entire chart
						return (
							<ChartRow isVisible key={indexMethodCategory}>
								<ChartHeaderCell
									text={itemMethodCategory.text}
									description={itemMethodCategory.textSecondLine}
								/>
								{visibleCells}
							</ChartRow>
						);
					})}
			</ChartBody>
		</ChartWrapper>
	);
}

function FilterOption(props) {

	const handleClick = () => {
		props.onClick(props.languageId);
	};

	return (
		<FilterButton
			onClick={handleClick}
			isActive={props.isActive}
		>
			{props.children}
		</FilterButton>
	);
}

function Filter(props) {

	const { selectedLanguage, onLanguageSelect } = props;

	const options = chartData.languages.map((language) => (
	  <FilterOption
		key={language.id}
		languageId={language.id}
		onClick={onLanguageSelect}
		isActive={selectedLanguage === language.id}
	  >
		{language.name}
	  </FilterOption>
	));

	return (
	  <FilterWrapper>
		<FilterOptions>
		  <FilterOption
			languageId="all"
			onClick={onLanguageSelect}
			isActive={selectedLanguage === "all"}
		  >
			All characters
		  </FilterOption>
		  {options}
		</FilterOptions>
	  </FilterWrapper>
	);
  }

class Page extends React.Component {

    constructor(props) {

		super(props);

		this.state = {
			selectedLanguage: 'all'
		};
    }


    render() {

        return (
			<Canvas>
				<Header>
					<Title><InlineV>viksâ</InlineV>·vixa</Title>
					<Etymology>From Sanskrit viśva विश्व (universal) <br/>+ akṣara अक्षर (syllable).</Etymology>
				</Header>
				<IntroSection>
					<IntroSectionGrid>
						<IntroSectionCell
							headingVixa="ə yunivərzəl elfəbet"
							heading="A universal alphabet"
							isBig="true"
						/>
						<IntroSectionCell
							headingVixa="izi tu lərn"
							heading="Easy to learn"
							paragraph="Each part of Vixa’s letters tells you something about the sound they represent. This internal logic can make learning faster and easier."
						/>
						<IntroSectionCell
							headingVixa="izi tu ráyt"
							heading="Easy to write"
							paragraph="Vixa is super fast to write by hand. The most common sounds have the simplest letters. Consonants can be written without lifting the pen and vowels can be omitted altogether."
						/>
						<IntroSectionCell
							headingVixa="sâports meni lengwəjiz"
							heading="Supports many languages"
							paragraph="Vixa supports the sounds used in the native languages of at least 3.6 billion people, including English, Mandarin Chinese, Hindi, Spanish, French and Standard Arabic. Tonal markers not yet included."
						/>
						<IntroSectionCell
							headingVixa="béyzd ǎn sáyəns"
							heading="Based on science"
							paragraph="Vixa is based on phonology. Features of a letter describe phonological characteristics of the sound it represents. If two characters are similar, the sounds they represent are also similar."
						/>
						<IntroSectionCell
							headingVixa="ə θat iksperimənt"
							heading="A thought experiment"
							paragraph="I made Vixa because I love learning about languages and designing fonts. I wanted to explore the idea of what a global alphabet might look like."
						/>
						<IntroSectionCell
							headingVixa="tráy it áut!"
							heading="Try it out!"
							paragraph="Maybe you could use Vixa as a cipher, or for a fictional language? I made a font you can download. It’s free as long as you use it non-commercially and credit me."
						/>
					</IntroSectionGrid>
				</IntroSection>
				<ChartSection>
					<ChartTitle><InlineV>viksâ keriktərz</InlineV><br />Vixa characters</ChartTitle>
					<Filter
						selectedLanguage={this.state.selectedLanguage}
						onLanguageSelect={(languageId) => this.setState({ selectedLanguage: languageId })}
					/>
					<ChartsContainer>
						<ChartContainer>
							<ChartSubtitle><InlineV>kánsonənts</InlineV><br />Consonants</ChartSubtitle>
							<ChartNew selectedLanguage={this.state.selectedLanguage} type="consonant" />
						</ChartContainer>
						<ChartContainer>
							<ChartSubtitle><InlineV>váwəlz</InlineV><br />Vowels</ChartSubtitle>
							<ChartNew selectedLanguage={this.state.selectedLanguage} type="vowel"/>
						</ChartContainer>
					</ChartsContainer>
				</ChartSection>
				<ContentSection>
					<ContentSectionTitle>
						<Heading2><InlineV>intrədákšən</InlineV><br />Introduction</Heading2>
					</ContentSectionTitle>
					<ContentSectionContent>
						<ParagraphBig>Have you ever wondered why letters look the way they do? For example, why does the latin letter "A" look like that? The answer sounded surprising to me.</ParagraphBig>
						<Heading3><InlineV>ðə orijənz áf ðə letən elfəbet</InlineV><br />The origins of the latin alphabet </Heading3>
						<Paragraph>Turns out, a couple milennia ago, in Egyptian hieroglyphs, the word for "Ox" used to be represented by a drawing of a head of an ox:</Paragraph>
						<EgyptianCharacter>𓃾</EgyptianCharacter>
						<Paragraph>Then, in the 19-15th century BC, the Canaanites developed a new script for themselves. Their script described sounds, not concepts. For the sound "A", they chose a shape that resembled the Egyptian hieroglyph for "Ox", because the Egyptian word for "Ox", "ʾalp", began with that sound.</Paragraph>
						<StyledProtoSemiticAleph />
						<Paragraph>Then, hundreds of years later, the Phoenicians developed a new script, basing it on the Canaanite script. They simplified the shape even more, and turned it on its side. Now, the letter they called "ʾālep" looked like this:</Paragraph>
						<BigLetter>𐤀</BigLetter>
						<Paragraph> Then, hundreds of years later, the Greek developed a new script, basing it on the Phoenician script. For some inexplicable reason, they once again decided to turn the Phoenician letter on its side. Now, the letter they called "alpha" looked like this:</Paragraph>
						<BigLetter>A</BigLetter>
						<Paragraph>Then the Etruscans copied it, and the Romans copied it, and it became the latin A we all know. People chiseled it, wrote it with pens, adapted it for the printing press and then displayed it on screens.</Paragraph>
						<Paragraph>When I'm writing this, it's currently the 21st century. There is a human-made robot traveling on the surface of Mars. The robot is called Perseverance. The "A" in its name looks like that because... it's a drawing of an ox upside down.</Paragraph>
						<Heading3><InlineV>fičərəl elfəbets</InlineV><br />Featural alphabets</Heading3>
						<Paragraph>I work in user experience design. My job is to design things so that people can easily understand and use them.</Paragraph>
						<Paragraph>One day, it occured to me that every interface I design uses language, and the latin alphabet, to convey thoughts. The alphabet is a tool that we use all the time.</Paragraph>
						<Paragraph>Perhaps the most important principle in user experience design is <em>consistency</em>. One aspect of consistency is that if two things are similar, they should appear similar.</Paragraph>
						<Paragraph>Most alphabets don't seem to follow this principle at all, since they weren't designed to. They just evolved naturally, over time. Because of this, similar sounds, like "k" and "g", can look completely different. Sometimes the same letter even denotes an entirely different sound - just compare the "e" letters in the word "different."</Paragraph>
						<Paragraph>Naturally, we have grown accustomed to these inconsistencies. We can read and write pretty well regardless. But this got me thinking - what if we had an alphabet that <em>was</em> consistent? Would that be possible?</Paragraph>
						<Paragraph>Of course it would. There are already several featural alphabets that are based on logical rules - an example might be Hangul, the alphabet used to write Korean. And, in my experience, this system works! I found Hangul extremely easy to learn, because of this underlying logic.</Paragraph>
						<Paragraph>I decided to try designing a featural alphabet that can be used for most of the languages in the world.</Paragraph>
						<Heading3><InlineV>dizáyn gols</InlineV><br />Design goals</Heading3>
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
						<Paragraph>To make it fast to write, I designed the letters in a way that they can be written cursively, without lifting the pen. I applied a method that is used in file compression: the most frequently used types of sounds are represented by the simplest letterforms. I also made it so that vowels can be omitted, similarly to Hebrew, making writing even faster when needed.</Paragraph><Paragraph>Here's the system I came up with.</Paragraph>
					</ContentSectionContent>
				</ContentSection>
				<ContentSection>
					<ContentSectionTitle>
						<Heading2><InlineV>ðə lǎjik biháynd ðə&nbsp;letərz</InlineV><br />The logic behind the letters</Heading2>
					</ContentSectionTitle>
					<ContentSectionContent>
						<ParagraphBig>Each part of Vixa’s letters tells you something about the sound they represent. Here's how the features of the letters correspond to the phonological properties of the sounds.</ParagraphBig>
						<Heading3>Letter bases tell you <em>where</em> sounds are produced</Heading3>
						<Paragraph>All Vixa letters contain a letter <em>base</em>. This letter base tells you the place of articulation. Humans can articulate sounds in various places in the mouth, from the lips all the way to the throat.</Paragraph>
						<Paragraph><strong>Labial</strong> sounds are articulated with one or both lips. Their Vixa letter base is: <InlineV>p</InlineV></Paragraph>
						<Paragraph><strong>Dental</strong> sounds are articulated with the tongue against the upper teeth. Their Vixa letter base is: <InlineV>θ</InlineV></Paragraph>
						<Paragraph><strong>Alveolar</strong> sounds are articulated with the tongue against the superior alveolar ridge: the ridge behind the upper teeth. Their Vixa letter base is: <InlineV>t</InlineV></Paragraph>
						<Paragraph><strong>Retroflex</strong> sounds are articulated with the tongue curled back, between the alveolar ridge and the hard palate: the middle of the roof of the mouth. Their Vixa letter base is: <InlineV>ṭ</InlineV></Paragraph>
						<Paragraph><strong>Postalveolar</strong> sounds are articulated with the tongue against the back of the alveolar ridge. They share a letter base with palatal sounds, articulated with the tongue raised against the hard palate. Their Vixa letter base is: <InlineV>ť</InlineV></Paragraph>
						<Paragraph><strong>Velar</strong> sounds are articulated with the back of the tongue against the soft palate, the back part of the roof of the mouth. Their Vixa letter base is: <InlineV>k</InlineV></Paragraph>
						<Paragraph><strong>Uvular</strong> sounds are articulated with the tongue against the uvula. They share a letter base with pharyngeal sounds, articulated with the tongue in the pharynx. Their Vixa letter base is: <InlineV>q</InlineV></Paragraph>
						<Paragraph><strong>Glottal</strong> sounds are articulated using the glottis, the opening of the vocal folds. Their Vixa letter base is: <InlineV>ɦ</InlineV></Paragraph>
						<Heading3>Additional letter features tell you <em>how</em>  the sounds are produced</Heading3>
						<Paragraph>Letters can contain additional features, attached to the letter base. These show details about the <em>method</em> of articulation.</Paragraph>
						<Heading4>Voiceless plosives</Heading4>
						<BigLetter><InlineV>p t ť k</InlineV></BigLetter>
						<Paragraph>Also known as occlusives or stops, voiceless plosives are produced with articulators blocking the vocal tract, so that airflow ceases. The vocal cords don’t vibrate. They are the most frequently used speech sounds across all the languages of the world.</Paragraph>
						<Paragraph>Because these sounds are the most common, they have the simplest letter shapes. Voiceless plosives are denoted with just the letter base, without any ascenders or descenders.</Paragraph>
						<Heading4>Aspirated voiceless plosives</Heading4>
						<BigLetter><InlineV>P T K</InlineV></BigLetter>
						<Paragraph>Voiceless plosives, released with a short burst of breath. Used by Indo-Aryan languages, Standard Chinese, Armenian and Ancient Greek.</Paragraph>
						<Paragraph>Aspiration is denoted with a short tail on the right.</Paragraph>
						<Heading4>Pharyngealized voiceless plosives</Heading4>
						<BigLetter><InlineV>Ṫ</InlineV></BigLetter>
						<Paragraph>Voiceless plosives, articulated with a constricted pharynx. Used by Arabic and Classical Hebrew.</Paragraph>
						<Paragraph>Pharyngealization is denoted with a short tail on the right, along with a dot.</Paragraph>
						<Heading4>Voiced plosives</Heading4>
						<BigLetter><InlineV>b d ď g</InlineV></BigLetter>
						<Paragraph>Produced with articulators completely blocking the vocal tract, so that airflow ceases. Vocal cords vibrate. They are very common sounds, used by lots of Indo-European languages.</Paragraph>
						<Paragraph>Voicing is denoted with an ascender on the left.</Paragraph>
						<Heading4>Murmured plosives</Heading4>
						<BigLetter><InlineV>B D G</InlineV></BigLetter>
						<Paragraph>Voiced plosives, with the vocal folds adjusted to let more air escape. Used by many Indo-Aryan and Nguni languages, like Hindi, Urdu, Xhosa and Zulu.</Paragraph>
						<Paragraph>Murmured consonants are denoted with an ascender on the left, signifying voicing, and a tail on the right, signifying that it is murmured.</Paragraph>
						<Heading4>Pharyngealized voiced plosives</Heading4>
						<BigLetter><InlineV>Ḋ</InlineV></BigLetter>
						<Paragraph>Voiced plosives, articulated with a constricted pharynx. Used by Arabic and Classical Hebrew.</Paragraph>
						<Paragraph>Voiced pharyngealized plosives are denoted by an ascender on the left, signifying voicing, and a tail and dot on the right, signifying pharyngealization.</Paragraph>
						<Heading4>Nasals</Heading4>
						<BigLetter><InlineV>m n ñ ň</InlineV></BigLetter>
						<Paragraph>Produced with the articulators blocking the vocal tract, so that airflow ceases. At the same time, the velum is lowered, so that air escapes through the nose. These sounds are extremely common.</Paragraph>
						<Paragraph>Nasal sounds are denoted by a horizontal crossbar through the letterform.</Paragraph>
						<Heading4>Voiceless fricatives</Heading4>
						<BigLetter><InlineV>f s š x</InlineV></BigLetter>
						<Paragraph>Produced when the articulators approach each other, producing turbulent airflow. Vocal cords don’t vibrate. They are used by many languages.</Paragraph>
						<Paragraph>Fricatives are denoted by a descender on the right.</Paragraph>
						<Heading4>Pharyngealized voiceless fricatives</Heading4>
						<BigLetter><InlineV>Ṡ</InlineV></BigLetter>
						<Paragraph>Voiceless fricatives, articulated with a constricted pharynx. Used by Arabic.</Paragraph>
						<Paragraph>Pharyngealized voiceless fricatives are denoted by an descender on the right, signifying a fricative, and a tail and dot on the right, signifying pharyngealization.</Paragraph>
						<Heading4>Voiced fricatives</Heading4>
						<BigLetter><InlineV>v z ž ǧ</InlineV></BigLetter>
						<Paragraph>Articulators approach each other, producing turbulent airflow. Vocal chords vibrate. Used by many languages.</Paragraph>
						<Paragraph>Voiced fricatives are denoted with an ascender on the left, signifying voicing, and a descender on the right, signifying a fricative.</Paragraph>
						<Heading4>Pharyngealized voiced fricatives</Heading4>
						<BigLetter><InlineV>Ż</InlineV></BigLetter>
						<Paragraph>Voiced fricatives, articulated with a constricted pharynx. Used by Arabic.</Paragraph>
						<Paragraph>Pharyngealized voiced fricatives are denoted by an ascender on the left, signifying voicing, a descender on the right, signifying a fricative, and a tail and dot on the right, signifying pharyngealization.</Paragraph>
						<Heading4>Approximants</Heading4>
						<BigLetter><InlineV>r y w</InlineV></BigLetter>
						<Paragraph>Produced when the articulators approach each other, but not close enough to produce turbulent airflow. Very common, often used sounds.</Paragraph>
						<Paragraph>Approximants are denoted by a descender on the right, with an added horizontal line.</Paragraph>
						<Heading4>Lateral approximant</Heading4>
						<BigLetter><InlineV>l</InlineV></BigLetter>
						<Paragraph>Produced when the articulators block airstream in the middle, but allow air to flow along the sides of the tongue. Very common.</Paragraph>
						<Paragraph>The lateral approximant is a unique, irregular letter. In most languages, there is only one lateral approximant, so it's not necessary to indicate where the articulation occurs. Thus, the lateral approximant does not conform to the alveolar base shape. This irregularity is a drawback, but it allows its shape to be very simple.</Paragraph>
						<Heading4>Voiceless affricates</Heading4>
						<BigLetter><InlineV>c č</InlineV></BigLetter>
						<Paragraph>Begins as a plosive and releases as a fricative. Vocal cords don’t vibrate. These sounds appear in lots of alphabets, yet they are rarely used.</Paragraph>
						<Paragraph>An affricate is denoted with a descender on the left.</Paragraph>
						<Heading4>Aspirated voiceless affricates</Heading4>
						<BigLetter><InlineV>C Č</InlineV></BigLetter>
						<Paragraph>Voiceless affricates, released with a short burst of breath.</Paragraph>
						<Paragraph>As with plosives and fricatives, the left ascender signifies voicing.</Paragraph>
						<Heading4>Voiced affricates</Heading4>
						<BigLetter><InlineV>ź j</InlineV></BigLetter>
						<Paragraph>Begins as a plosive and releases as a fricative. Vocal cords vibrate. Used even less frequently than voiceless affricates.</Paragraph>
						<Paragraph>As with plosives and fricatives, a right tail denotes aspiration.</Paragraph>
						<Heading4>Murmured affricates</Heading4>
						<BigLetter><InlineV>Z J</InlineV></BigLetter>
						<Paragraph>Voiced affricates, with the vocal folds adjusted to let more air escape.</Paragraph>
						<Paragraph>As with plosives and fricatives, a left ascender denotes voicing, and the right tail denotes a murmured consonant.</Paragraph>
						<Heading4>Pharyngealized voiceless affricates</Heading4>
						<BigLetter><InlineV>Ź Đ</InlineV></BigLetter>
						<Paragraph>Voiceless affricates, articulated with a constricted pharynx. Used by Arabic.</Paragraph>
						<Paragraph>As with plosives and fricatives, a left ascender denotes voicing, and the right tail with dot denotes a pharyngealized consonant.</Paragraph>
						<Heading4>Trills and taps</Heading4>
						<BigLetter><InlineV>ŕ</InlineV></BigLetter>
						<Paragraph>Articulators vibrate, or are thrown against another. Very rare. Used by some European languages, for example Spanish.</Paragraph>
						<Paragraph>Trills have an ascender on the left, with an added horizontal line.</Paragraph>
						<Heading4>Aspirated taps</Heading4>
						<BigLetter><InlineV>Ŕ Ṛ</InlineV></BigLetter>
						<Paragraph>Voiced taps or flaps. Very rare. Used by, for example, Hindustani languages.</Paragraph>
						<Paragraph>As with plosives and fricatives, a right tail denotes aspiration.</Paragraph>
					</ContentSectionContent>
				</ContentSection>
			</Canvas>
		);
	}
}

// ========================================

ReactDOM.render(
	<Page />,
	document.getElementById('root')
);
