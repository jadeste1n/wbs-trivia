import {NavLink} from 'react-router-dom'

const Nav = () => {
	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<NavLink to='/' className="btn btn-ghost text-xl">Quizzy</NavLink>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<NavLink to='/'>Start New Quiz</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Nav;