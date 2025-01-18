import { useContext, useState, useEffect } from "react";
import DefaultContext from "../context/contextProvider";
import { fetchQuestions } from "../utils/fetchQuestions";
import QA from "../components/q+a";

const Quiz = () => {
	const { formData, qas, setQAs, formAnswers , setFormAnswers} = useContext(DefaultContext); // Access context for fetch
	const category = formData.category;
	const difficulty = formData.difficulty;

	useEffect(() => {
		// fetch qas on mount
		const loadQuestions = async () => {
			// has to be async
			try {
				let fetchedQAs = await fetchQuestions(category, difficulty);
				//console.log(fetchedQAs) //testing
				setQAs(fetchedQAs); //save in state
			} catch (error) {
				console.error("Error fetching questions:", error);
			}
			console.log(qas);
			localStorage.setItem("qas", JSON.stringify(qas)); // save in local storage
		};

		loadQuestions();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		//for
		setFormAnswers(JSON.parse(localStorage.getItem("qas"))); // get questions and answer object
		console.log(formAnswers);

		

		/*
        // test if all question have selection, otherwise throw error + show where
		const allQuestions = document.getElementsByClassName('question-container');// get all the questions container in the page
		console.log(allQuestions)
		//get all Input Fields of each question and an check if checked > 0 
		Array.from(allQuestions).forEach((question) => {
			for (let a = 0 ; a < 5; a++ ) { //for each child element get the input 
				const answers = question.children[a].children[0].checked //fo each child Element get the input field checked value
´				
			}
			//if all false -> remove hidden class from element with class ux-class in particular group
			//if one true -> push to array formAnswers as givenAnswer: 'value' where question is xy
		})
		//let 
		*/
		

		//if all have selection: save each answer in local storage and give score if correct

		//navigate to results page
		//navigate("/result");
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="grid grid-col-1 gap-12">
				{qas.map((qa) => (
					<QA key={qa.id} qa={qa} />
				))}
			</div>
			<button type="submit">Submit Answers</button>
		</form>
	);
};

export default Quiz;
