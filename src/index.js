import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import chartData from './chart.json';

import {
	BigLetter,
	EgyptianCharacter,
	Canvas,
	CategoryCardContent as CategoryCardBody,
	CategoryCardWrapper,
	CategoryCardSymbol,
	CategoryCardTitle,
	CategoryCardText,
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
	MethodCardBody,
	MethodCardCharacter,
	MethodCardCharacters,
	MethodCardTitle,
	MethodCardWrapper,
	NumberedList,
	Paragraph,
	ParagraphBig,
	StyledChartRow,
	StyledProtoSemiticAleph,
	Title,
	NumberedListItem
} from './styles.js';

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

function CategoryCard(props) {

	return(
		<CategoryCardWrapper>
			<CategoryCardSymbol color={props.color}>
				<InlineV>{props.symbol}</InlineV>
			</CategoryCardSymbol>
			<CategoryCardBody>
				<CategoryCardTitle color={props.color}>
					{props.title}
				</CategoryCardTitle>
				<CategoryCardText>
					{props.text}
				</CategoryCardText>
			</CategoryCardBody>
		</CategoryCardWrapper>
	);
}

function MethodCard(props) {

	return (
		<MethodCardWrapper>
			<MethodCardTitle>
				{props.title}
			</MethodCardTitle>
			<MethodCardCharacters>
				{props.characters.map((itemCharacter, indexCharacter) => (
					<MethodCardCharacter key={indexCharacter} color={itemCharacter.color}>
						<InlineV>{itemCharacter.character}</InlineV>
					</MethodCardCharacter>
				))}
			</MethodCardCharacters>
			<MethodCardBody>
				<Paragraph>{props.articulationDescription}</Paragraph>
				<Paragraph>{props.shapeDescription}</Paragraph>
			</MethodCardBody>
		</MethodCardWrapper>
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
						<CategoryCard
							color = "red4"
							symbol = "p"
							title = "Labial"
							text = "Articulated with one or both lips."
						/>
						<CategoryCard 
							color = "orange4"
							symbol = "θ"
							title = "Dental"
							text = "Articulated with the tongue against the upper teeth."
						/>
						<CategoryCard 
							color = "yellow4"
							symbol = "t"
							title = "Alveolar"
							text = "Articulated with the tongue against the front of the alveolar ridge: the ridge behind the upper teeth."
						/>
						<CategoryCard 
							color = "green4"
							symbol = "ṭ"
							title = "Retroflex"
							text = "Articulated with the tongue curled back, between the alveolar ridge and the hard palate: the middle of the roof of the mouth."
						/>
						<CategoryCard 
							color = "jade4"
							symbol = "ť"
							title = "Postalveolar or palatal"
							text = "Articulated with the tongue against the back of the alveolar ridge, or with the tongue raised against the hard palate."
						/>
						<CategoryCard 
							color = "blue4"
							symbol = "k"
							title = "Velar"
							text = "Articulated with the back of the tongue against the soft palate, the back part of the roof of the mouth."
						/>
						<CategoryCard 
							color = "periwinkle4"
							symbol = "q"
							title = "Uvular or pharyngeal"
							text = "Articulated with the tongue against the uvula, or in the pharynx."
						/>
						<CategoryCard 
							color = "purple4"
							symbol = "ɦ"
							title = "Glottal"
							text = "Articulated using the glottis, the opening of the vocal folds."
						/>
						<Heading3>Additional letter features tell you <em>how</em>  the sounds are produced</Heading3>
						<Paragraph>Letters can contain additional features, attached to the letter base. These show details about the <em>method</em> of articulation.</Paragraph>
						<MethodCard
							title = "Voiceless plosives"
							characters = {[
								{ character: "p", color: "red4" },
								{ character: "t", color: "yellow4" },
								{ character: "ṭ", color: "green4" },
								{ character: "ť", color: "jade4" },
								{ character: "k", color: "blue4" },
								{ character: "q", color: "periwinkle4" },
								{ character: "ɦ", color: "purple4" }
							]}
							articulationDescription = "Articulators block vocal tract, airflow ceases. Vocal cords don’t vibrate. The most commonly and frequently used speech sounds across the world."
							shapeDescription = "Because these sounds are the most common, they have the simplest letter shapes. Voiceless plosives are denoted with just the letter base, without any ascenders or descenders."
						/>
						<MethodCard
							title = "Aspirated voiceless plosives"
							characters = {[
								{ character: "P", color: "red4" },
								{ character: "T", color: "yellow4" },
								{ character: "Ṭ", color: "green4" },
								{ character: "K", color: "blue4" }
							]}
							articulationDescription = "Voiceless plosives, released with a short burst of breath. Used by Indo-Aryan languages, Standard Chinese, Armenian and Ancient Greek."
							shapeDescription = "Aspiration is denoted with a short tail on the right."
						/>
						<MethodCard
							title = "Pharyngealized voiceless plosives"
							characters = {[
								{ character: "Ṫ", color: "yellow4" }
							]}
							articulationDescription = "Voiceless plosives, articulated with a constricted pharynx. Used by Arabic and Classical Hebrew."
							shapeDescription = "Pharyngealization is denoted with a short tail on the right, along with a dot."
						/>
						<MethodCard
							title = "Voiced plosives"
							characters = {[
								{ character: "b", color: "red4" },
								{ character: "d", color: "yellow4" },
								{ character: "ď", color: "green4" },
								{ character: "ḍ", color: "jade4" },
								{ character: "g", color: "blue4" },
								{ character: "ġ", color: "periwinkle4" }
							]}
							articulationDescription = "Articulators block vocal tract, airflow ceases. Vocal cords vibrate. Common sounds, used by lots of Indo-European languages."
							shapeDescription = "Voicing is denoted with an ascender on the left."
						/>
						<MethodCard
							title = "Murmured plosives"
							characters = {[
								{ character: "B", color: "red4" },
								{ character: "D", color: "yellow4" },
								{ character: "Ḍ", color: "green4" },
								{ character: "G", color: "blue4" }
							]}
							articulationDescription = "Voiced plosives, with vocal folds adjusted to let more air escape. Used by many Indo-Aryan and Nguni languages, like Hindi, Urdu, Xhosa and Zulu."
							shapeDescription = "Murmured consonants are denoted with an ascender on the left, signifying voicing, and a tail on the right, signifying that it is murmured."
						/>
						<MethodCard
							title = "Pharyngealized voiced plosives"
							characters = {[
								{ character: "Ḋ", color: "yellow4" }
							]}
							articulationDescription = "Voiced plosives, articulated with a constricted pharynx. Used by Arabic and Classical Hebrew."
							shapeDescription = "Voiced pharyngealized plosives are denoted by an ascender on the left, signifying voicing, and a tail and dot on the right, signifying pharyngealization."
						/>
						<MethodCard
							title = "Nasals"
							characters = {[
								{ character: "m", color: "red4" },
								{ character: "n", color: "yellow4" },
								{ character: "ñ", color: "green4" },
								{ character: "ň", color: "jade4" },
								{ character: "ṇ", color: "blue4" }
							]}
							articulationDescription = "Articulators block the vocal tract, airflow ceases. The velum is lowered, air escapes through the nose. These sounds are extremely common."
							shapeDescription = "Nasal sounds are denoted by a horizontal crossbar through the letterform."
						/>
						<MethodCard
							title = "Voiceless fricatives"
							characters = {[
								{ character: "f", color: "red4" },
								{ character: "θ", color: "orange4" },
								{ character: "s", color: "yellow4" },
								{ character: "ṣ", color: "green4" },
								{ character: "š", color: "jade4" },
								{ character: "x", color: "blue4" },
								{ character: "ħ", color: "periwinkle4" },
								{ character: "h", color: "violet4" }
							]}
							articulationDescription = "Articulators approach each other, producing turbulent airflow. Vocal cords don’t vibrate. They are used by many languages."
							shapeDescription = "Fricatives are denoted by a descender on the right."
						/>
						<MethodCard
							title = "Pharyngealized voiceless fricatives"
							characters = {[
								{ character: "Ṡ", color: "yellow4" }
							]}
							articulationDescription = "Voiceless fricatives, articulated with a constricted pharynx. Used by Arabic."
							shapeDescription = "Pharyngealized voiceless fricatives are denoted by an descender on the right, signifying a fricative, and a tail and dot on the right, signifying pharyngealization."
						/>
						<MethodCard
							title = "Voiced fricatives"
							characters = {[
								{ character: "v", color: "red4" },
								{ character: "ð", color: "orange4" },
								{ character: "z", color: "yellow4" },
								{ character: "ẓ", color: "green4" },
								{ character: "ž", color: "jade4" },
								{ character: "ǧ", color: "blue4" },
								{ character: "γ", color: "periwinkle4" }
							]}
							articulationDescription = "Articulators approach each other, producing turbulent airflow. Vocal cords vibrate. Used by many languages."
							shapeDescription = "Voiced fricatives are denoted with an ascender on the left, signifying voicing, and a descender on the right, signifying a fricative."
						/>
						<MethodCard
							title = "Pharyngealized voiced fricatives"
							characters = {[
								{ character: "Ż", color: "yellow4" }
							]}
							articulationDescription = "Voiced fricatives, articulated with a constricted pharynx. Used by Arabic."
							shapeDescription = "Pharyngealized voiced fricatives are denoted by an ascender on the left, signifying voicing, a descender on the right, signifying a fricative, and a tail and dot on the right, signifying pharyngealization."
						/>
						<MethodCard
							title = "Approximants"
							characters = {[
								{ character: "r", color: "yellow4" },
								{ character: "y", color: "jade4" },
								{ character: "w", color: "blue4" }
							]}
							articulationDescription = "Articulators approach each other, but not close enough to produce turbulent airflow. Very common, often used sounds."
							shapeDescription = "Approximants are denoted by a descender on the right, with an added horizontal line."
						/>
						<MethodCard
							title = "Lateral approximant"
							characters = {[
								{ character: "l", color: "yellow4" }
							]}
							articulationDescription = "Articulators block airstream in the middle, but allow air to flow along the sides of the tongue. Very common."
							shapeDescription = "The lateral approximant is a unique, irregular letter. In most languages, there is only one lateral approximant, so it's not necessary to indicate where the articulation occurs. Thus, the lateral approximant does not conform to the alveolar base shape. This irregularity is a drawback, but it allows this shape to be very simple."
						/>
						<MethodCard
							title = "Voiceless affricates"
							characters = {[
								{ character: "c", color: "yellow4" },
								{ character: "č", color: "blue4" }
							]}
							articulationDescription = "Affricates begin as a plosive and release as a fricative. Vocal cords don’t vibrate. These sounds appear in lots of alphabets, yet they are rarely used."
							shapeDescription = "An affricate is denoted with a descender on the left."
						/>
						<MethodCard
							title = "Aspirated voiceless affricates"
							characters = {[
								{ character: "C", color: "yellow4" },
								{ character: "Č", color: "blue4" }
							]}
							articulationDescription = "Voiceless affricates, released with a short burst of breath."
							shapeDescription = "As with plosives and fricatives, a right tail denotes aspiration."
						/>
						<MethodCard
							title = "Voiced affricates"
							characters = {[
								{ character: "ź", color: "yellow4" },
								{ character: "j", color: "blue4" }
							]}
							articulationDescription = "Affricates begin as a plosive and release as a fricative. Vocal cords vibrate. Used even less frequently than voiceless affricates."
							shapeDescription = "As with plosives and fricatives, the left ascender signifies voicing."
						/>
						<MethodCard
							title = "Murmured affricates"
							characters = {[
								{ character: "Z", color: "yellow4" },
								{ character: "J", color: "blue4" }
							]}
							articulationDescription = "Voiced affricates, with the vocal folds adjusted to let more air escape."
							shapeDescription = "As with plosives and fricatives, a left ascender denotes voicing, and the right tail denotes a murmured consonant."
						/>
						<MethodCard
							title = "Pharyngealized voiceless affricates"
							characters = {[
								{ character: "Ź", color: "yellow4" },
								{ character: "Đ", color: "blue4" }
							]}
							articulationDescription = "Voiceless affricates, articulated with a constricted pharynx. Used by Arabic."
							shapeDescription = "As with plosives and fricatives, a left ascender denotes voicing, and the right tail with dot denotes a pharyngealized consonant."
						/>
						<MethodCard
							title = "Trills and taps"
							characters = {[
								{ character: "ŕ", color: "yellow4" }
							]}
							articulationDescription = "Articulators vibrate, or are thrown against another. Very rare. Used by some Indo-European languages, for example Spanish, Hindi and Urdu."
							shapeDescription = "Trills have an ascender on the left, with an added horizontal line."
						/>
						<MethodCard
							title = "Aspirated taps"
							characters = {[
								{ character: "Ŕ", color: "yellow4" },
								{ character: "Ṛ", color: "green4" }
							]}
							articulationDescription = "Voiced taps or flaps. Very rare. Used by, for example, Hindustani languages."
							shapeDescription = "As with plosives and fricatives, a right tail denotes aspiration."
						/>
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
