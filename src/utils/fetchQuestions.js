export async function fetchQuestions(category, difficulty) {

    let url = `https://the-trivia-api.com/v2/questions`;

	// Add query parameters conditionally
	const params = [];
	if (difficulty !== "all") {
		params.push(`difficulties=${difficulty}`);
	}
	if (category !== "all") {
		params.push(`categories=${category}`);
	}

	// Append query parameters to the base URL if there is more than 1 params inside
	if (params.length > 0) {
		url += `?${params.join("&")}`; //example https://the-trivia-api.com/v2/questions?difficulties=medium&categories=science
	}

	
	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error("Error fetching categories: ${response.statusText}");
		}

		const data = await response.json(); //Parse

		console.log(data); //testing
		return data;
	} catch (error) {
		console.error(error);
	}
}
