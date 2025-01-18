const QA = ({ qa }) => {
	if (!qa) return <p>No Questions for this request</p>; // Handle case where qa is not provided

	const correct = qa.correctAnswer;
	const incorrect = qa.incorrectAnswers;
	const question = qa.question.text;
    const questionId = qa.id;

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

	return (
		<div className="p-4 rounded-3xl bg-base-300 shadow-xl h-fit ">
			<h3 className="question">{question}</h3>
			<div className="question-container grid grid-cols-2">
				{allAnswers.map((answer, index) => (
					<div className="m-8 rounded-xs" key={index}>
                        <input  className="answerOption" name={questionId} type="radio" value={answer}/><label> {answer}</label>
					</div>
				))}
			</div>
			<div className="bg-amber-900 text-amber-100 m-4 p-2 rounded ux-warning hidden">Please make a choice.</div>
		</div>
	);
};

export default QA;
