import React from 'react';
import './App.css';
import ComboBox from './Components/ComboBox';

function App() {
	return (
		<div className="App">
			<div className="select-container">
				<ComboBox className="ComboBox"
					data={[
						{ valueField: 1, textField: 'Tbilisi' },
						{ valueField: 2, textField: 'Qutaisi' },
						{ valueField: 3, textField: 'Batumi' },
						{ valueField: 4, textField: 'Rustavi' },
						{ valueField: 5, textField: 'Gori' },
						{ valueField: 6, textField: 'Terjola' },
						{ valueField: 7, textField: 'Qobuleti' },
					]}
					placeholder={'Type to Search...'}
					onSelectedItemChange={(valueFiled, textField) => {
						console.log(valueFiled, textField);
					}}
					valueField={3}
					textField={'Batumi'}
				/>
			</div>
		</div>
	);
}

export default App;
