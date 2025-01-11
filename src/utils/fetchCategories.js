export async function fetchCategories() {
    const categoriesURL = 'https://the-trivia-api.com/api/categories'

    try {
    const response = await fetch(categoriesURL);

    if(!response.ok) {
     throw new Error('Error fetching categories: ${response.statusText}') 
    }

    const data = await response.json(); //Parse
    //Format data into basic array:
    let categoriesArr = Object.values(data).flat(); //get all values in obj & create a new array with all sub-array elements
    
    console.log(categoriesArr); //testing
    return categoriesArr;
 
    } catch(error){
        console.error(error);
    }
}