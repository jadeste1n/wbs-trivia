import { useState, useContext } from "react";
import DefaultContext from "../context/contextProvider";
import { Link, useLocation } from "react-router-dom";

const QA = ({ qa }) => {
	if (!qa) return <p>No Questions for this request</p>; // Handle case where qa is not provided

	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const { formAnswers, setFormAnswers } = useContext(DefaultContext); // Access context
	const correct = qa.correctAnswer;
	const incorrect = qa.incorrectAnswers;
	const question = qa.question.text;
	const questionId = qa.id;
	let location = useLocation().pathname;

	//Give Answers in Random Order
	const shuffleAnswers = (correct, incorrect) => {
		const allAnswers = [correct, ...incorrect];

		// Fisher-Yates shuffle algorithm
		for (let i = allAnswers.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
		}

		return allAnswers;
	};

	const allAnswers = shuffleAnswers(correct, incorrect);

	const handleClick = (e) => {
		const answer = e.target.value;
		setSelectedAnswer(answer); // Update the selected answer in state

		// Update formAnswers object with the given answer
		const updatedFormAnswers = formAnswers.map((item) => {
			if (item.id === questionId) {
				return { ...item, givenAnswer: answer };
			}
			return item;
		});

		setFormAnswers(updatedFormAnswers);
	};

	return (
		<div
			className={` ${location === "/result" ? "grid grid-cols-3 gap-8" : ""}`}
		>
			<div
				className={`p-4 rounded-3xl bg-base-300 shadow-xl h-fit ${
					location === "/result" ? "col-span-2" : ""
				}`}
			>
				<h3 className="question">{question}</h3>
				<div
					className={`question-container grid grid-cols-2 justify-items-start `}
				>
					{allAnswers.map((answer, index) => (
						<div
							className={`p-6 w-full rounded-xs ${
								location === "/result" &&
								answer === correct &&
								qa.givenAnswer !== answer
									? "bg-emerald-300 "
									: location === "/result" &&
									  answer === correct &&
									  qa.givenAnswer === answer
									? "bg-emerald-300 outline outline-emerald-600  text-emerald-600"
									: (location === "/result") & (location === "/result") &&
									  qa.givenAnswer === answer &&
									  qa.givenAnswer !== correct
									? "outline outline-rose-800 text-rose-800"
									: ""
							}`}
							key={index}
						>
							<input
								onClick={handleClick}
								className="answerOption text-left "
								name={questionId}
								type="radio"
								value={answer}
								checked={selectedAnswer === answer}
							/>
							<label> {answer}</label>
						</div>
					))}
				</div>
				<div className="bg-amber-900 text-amber-100 m-4 p-2 rounded ux-warning hidden">
					Please make a choice.
				</div>
			</div>
			{location === "/result" && (
				<div>
					{correct === qa.givenAnswer ? (
						<div className="flex flex-col justify-items-start content-start	">
							<p className="text-left">You were right.</p>
							{"\n"}
							<p className="text-left">Score: +1</p>
						</div>
					) : (
						<div className="flex flex-col justify-items-start content-start	">
							<p className="text-left">You were wrong.</p>
							<p className="text-left">Score: 0</p>
						</div>
					)}
				</div>
			)}{" "}
		</div>
	);
};

export default QA;
