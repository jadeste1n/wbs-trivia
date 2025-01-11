import { fetchCategories } from "../utils/fetchCategories";
import {useEffect} from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'; 

const Home = () => {
    //states
    const [categories, setCategories] = useState([]); // State to hold fetched categories
    const [formData, setFormData] = useState({
        category: 'all',
        difficulty: 'all'})

    useEffect( ()=> {// fetch categories on mount
        const loadCategories = async () => {// has to be async
            try {
              const fetchedCategories = await fetchCategories();
              setCategories(fetchedCategories); 
            } catch (error) {
              console.error('Error fetching categories:', error);
            }
          };
      
          loadCategories();
    }, [])

    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name; // get name of target field
        const value = e.target.value; // get value of target field
        setFormData({ //override value of target field
            ...formData,
            [name] : value,
        })
        console.log(formData)
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        const name = e.target.name; // get name of target field
        const value = e.target.value; // get value of target field
        setFormData({ //override value of target field
            ...formData,
            [name] : value,
        })
    
        console.log('Form Submitted:', formData);//testing
        //go to quiz page 
        navigate('/quiz')
    }


	return (
		<div className="grid grid-col gap-12 h-dvh" >
			<h1 className="text-5xl	font-extrabold h-0">Test your knowledge!</h1>
			<div className="p-4 rounded-3xl bg-base-300 shadow-xl h-fit ">
				<div className="card-body">
					<h2 className="card-title">Play a quiz</h2>
					<p className="text-left">Specify Settings</p>
					<form onSubmit={handleSubmit} className="grid grid-col gap-16 justify-stretch justify-items-stretch mt-10 mb-10 w-full" >
						<div className="flex gap-12">
							<label htmlFor='category'>Choose Category to play in</label>
							<select name="category" value={formData.category} onChange={handleChange} className="select select-bordered w-full max-w-xs">
								<option value="all">All</option>
                                {categories.map((category , index) => (<option key={index} value={`${category}`}>{category}</option>))}
							</select>
						</div>
						<div className="flex gap-12">
							<label htmlFor='difficulty' className="text-left">Choose Difficulty to play in</label>
							<select name="difficulty" value={formData.difficulty} onChange={handleChange} className="select select-bordered w-full max-w-xs">
								<option value='all'>All</option>
								<option value='easy'>Easy</option>
								<option value='medium'>Medium</option>
								<option value='hard'>Hard</option>
							</select>
						</div>
						{/* 
                        <div className="flex gap-12 justify-stretch ">
                            <label>Choose Question Amount</label>
							<div className='w-100'>
								<input
									type="range"
									min={0}
									max="100"
									value="0"
									className="range"
									step="25"
								/>
								<div className="flex w-full justify-between px-2 text-xs">
									<span>10</span>
									<span>20</span>
									<span>30</span>
									<span>40</span>
									<span>50</span>
								</div>
							</div>
						</div>*/}
					</form>
					<div className="card-actions justify-end">
						<button className="btn btn-lg btn-primary" type="submit">Start quiz</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
