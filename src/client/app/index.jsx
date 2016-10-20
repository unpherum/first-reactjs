import React from 'react';
import ReactDom from 'react-dom';

import AwesomeComponent from './components/AwesomeComponent.jsx';

class App extends React.Component{
	render(){
		return(
			<div>
				<p>Below is the awesomeComponent component!</p>
				<AwesomeComponent />
			</div>
		);
	}
}

ReactDom.render(<App />, document.getElementById('app'));