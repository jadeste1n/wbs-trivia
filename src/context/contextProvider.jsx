import {createContext, useState} from 'react'

const DefaultContext = createContext();

export const MyProvider = ({children}) => {
    const [formData, setFormData] = useState({
		category: "all",
		difficulty: "all",
	});
    const [qas, setQAs] = useState([]); // State to hold fetched q&a's
    

    return(
        <DefaultContext.Provider value={{formData, setFormData, qas, setQAs}}>
            {children}
        </DefaultContext.Provider>
    )
}

export default DefaultContext