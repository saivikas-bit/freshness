import './App.css';
import axios from 'axios';
import { CssBaseline } from '@material-ui/core';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomePage from './pages/HomePage';
import CustomerReviews from './components/Products/CustomerReviews';
import ReadBlog from './components/util/ReadBlog';

axios.defaults.baseURL = 'https://api.unsplash.com';

function App() {
	return (
		<div>
			<HomePage />
			{/* <ReadBlog /> */}
			<CssBaseline />
		</div>
	);
}

export default App;
