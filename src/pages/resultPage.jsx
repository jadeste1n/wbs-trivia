import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DefaultContext from "../context/contextProvider";
import QA from "../components/q+a";

const Result = () => {
	const qas = [
		{
			category: "arts_and_literature",
			id: "622a1c397cc59eab6f950e20",
			correctAnswer: "Umberto Eco",
			incorrectAnswers: ["Haruki Murakami", "Søren Kierkegaard", "Oscar Wilde"],
			question: {
				text: "Which author wrote 'The Name of the Rose'?",
			},
			tags: ["literature", "arts_and_literature"],
			type: "text_choice",
			difficulty: "hard",
			regions: [],
			isNiche: false,
			givenAnswer: "Umberto Eco",
		},
		{
			category: "arts_and_literature",
			id: "622a1c397cc59eab6f950f06",
			correctAnswer: "Astrid Lindgren",
			incorrectAnswers: ["Charles Perrault", "Enid Blyton", "Beatrix Potter"],
			question: {
				text: "Which author wrote 'Mio, My Son'?",
			},
			tags: ["arts_and_literature"],
			type: "text_choice",
			difficulty: "hard",
			regions: [],
			isNiche: false,
			givenAnswer: "Dead Souls",
		},
		{
			category: "arts_and_literature",
			id: "646338e001d576cfac3aa2f5",
			correctAnswer: "Yetta Zimmerman",
			incorrectAnswers: ["Irene Silverman", "Regina Goldberg", "Martha Reuben"],
			question: {
				text: "In whose Brooklyn rooming house does the narrator of 'Sophie's Choice' live?",
			},
			tags: ["arts_and_literature", "literature"],
			type: "text_choice",
			difficulty: "hard",
			regions: [],
			isNiche: false,
			givenAnswer: "Dead Souls",
		},
		{
			category: "arts_and_literature",
			id: "622a1c347cc59eab6f94f965",
			correctAnswer: "Love in the Time of Cholera",
			incorrectAnswers: ["Portnoy's Complaint", "Pale Fire", "Tinker"],
			question: {
				text: "Which book contains the character 'Florentino Ariza'?",
			},
			tags: ["fictitious_characters", "literature", "arts_and_literature"],
			type: "text_choice",
			difficulty: "hard",
			regions: [],
			isNiche: false,
			givenAnswer: "Dead Souls",
		},
		{
			category: "arts_and_literature",
			id: "622a1c397cc59eab6f950f0f",
			correctAnswer: "Alexander Pushkin",
			incorrectAnswers: ["Nikolai Gogol", "Leo Tolstoy", "Henryk Sienkiewicz"],
			question: {
				text: "Which author wrote 'The Queen of Spades'?",
			},
			tags: ["arts_and_literature"],
			type: "text_choice",
			difficulty: "hard",
			regions: [],
			isNiche: false,
			givenAnswer: "Dead Souls",
		},
		{
			category: "arts_and_literature",
			id: "622a1c367cc59eab6f9501ce",
			correctAnswer: "The Silmarillion",
			incorrectAnswers: [
				"The Decameron",
				"Dead Souls",
				"Welcome to the N.H.K.",
			],
			question: {
				text: "Which piece of written work starts with the line 'There was Eru, the One, who in Arda is called Ilúvatar; and he made first the Ainur, the Holy Ones, that were the offspring of his thought, and they were with him before aught else was made.'?",
			},
			tags: ["fantasy", "quotes", "literature", "arts_and_literature"],
			type: "text_choice",
			difficulty: "hard",
			regions: [],
			isNiche: false,
			givenAnswer: "Dead Souls",
		},
		{
			category: "arts_and_literature",
			id: "622a1c397cc59eab6f950f4f",
			correctAnswer: "Jules Verne",
			incorrectAnswers: [
				"Victor Hugo",
				"Alphonse Daudet",
				"Edgar Rice Burroughs",
			],
			question: {
				text: "Which author wrote 'The Mysterious Island'?",
			},
			tags: ["arts_and_literature"],
			type: "text_choice",
			difficulty: "hard",
			regions: [],
			isNiche: false,
			givenAnswer: "Jules Verne",
		},
		{
			category: "arts_and_literature",
			id: "622a1c397cc59eab6f950e49",
			correctAnswer: "Christopher Tolkien",
			incorrectAnswers: ["Neil Gaiman", "J. R. R. Tolkien", "J. K. Rowling"],
			question: {
				text: "Which author wrote 'Unfinished Tales'?",
			},
			tags: ["arts_and_literature"],
			type: "text_choice",
			difficulty: "hard",
			regions: [],
			isNiche: false,
			givenAnswer: "J. R. R. Tolkien",
		},
		{
			category: "arts_and_literature",
			id: "6477bb1e550bc819ad646b76",
			correctAnswer: "Fauvist",
			incorrectAnswers: ["Impressionist", "Cubist", "Surrealist"],
			question: {
				text: "What art movement was Maurice de Vlaminck part of, known for its bold use of color?",
			},
			tags: ["painting", "art", "arts_and_literature"],
			type: "text_choice",
			difficulty: "hard",
			regions: [],
			isNiche: false,
			givenAnswer: "Fauvist",
		},
		{
			category: "arts_and_literature",
			id: "622a1c397cc59eab6f950ebc",
			correctAnswer: "Mark Twain",
			incorrectAnswers: [
				"Cassandra Clare",
				"Isabel Allende",
				"George R. R. Martin",
			],
			question: {
				text: "Which author wrote 'A Connecticut Yankee in King Arthur's Court'?",
			},
			tags: ["literature", "arts_and_literature"],
			type: "text_choice",
			difficulty: "hard",
			regions: [],
			isNiche: false,
			givenAnswer: "George R. R. Martin",
		},
	];

    let score = 0;
    const scoreValue = qas.forEach((element) => {
        if(element.correctAnswer === element.givenAnswer){
            score +=1; 
        }
    })

	return (
		<>
			<div className="m-24">
                <p>You score: {score}/{qas.length}</p>
            </div>
			<form>
				<div className="grid grid-col-1 gap-12">
					{qas.map((qa) => (
						<QA key={qa.id} qa={qa} />
					))}
				</div>
			</form>
		</>
	);
};

export default Result;
