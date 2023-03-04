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
	FilterWrapper,
	FilterButton,
	FilterOptions,
	Content,
	Etymology,
	Header,
	Heading2,
	Heading3,
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
							paragraph="Vixa supports the sounds used in the native languages of at least 3.6 billion people, including English, Mandarin, Yue, Wu, Hindi, Spanish and Standard Arabic. Tonal markers not yet included."
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
				<Content>
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
