import './App.css';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';

axios.defaults.baseURL = 'https://api.unsplash.com';

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact>
						<Redirect to="/HomePage" />
					</Route>
					<Route path="/HomePage" exact>
						<HomePage />
					</Route>
					<Router path="/HomePage/:categorie" exact>
						<CategoryPage />
					</Router>
					{/* <Router path="/Homepage/:categorie/:detail">
					</Router> */}
				</Switch>
			</Router>
		</>
	);
}

export default App;
