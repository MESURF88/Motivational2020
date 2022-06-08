import './App.css';
import jsonData from './quotes_test.json';
import React, { useState, useEffect } from 'react';
  
function App() {
  // Declare a new state variable, 
  const [quote, setQuote] = useState([]);
  const [toggle, setToggle] = useState(0);
  
  const randomIndex = () => {

	if (toggle == 1)
	{
	  setToggle(0);
	}
	else
	{
	  setToggle(1);	
	}
	var min = Math.ceil(3);
	var max = Math.floor(114);
	// slightly favor higher numbers on toggle
	if (toggle == 1)
	{
		min = 80;
	}
	return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

  const getQuotes = () => {
	  var idx = randomIndex();
	  var result = "";
	  var quotation = "";
	  const jsonStr = JSON.stringify(jsonData);
	  quotation = JSON.parse(jsonStr);	 
	
	  if (quotation.quotes[idx] === undefined){
		setQuote("                                                                                                                                                            ");
		setQuote("do or do not there is no try - yoda");
	  }
	  else{
		setQuote("                                                                                                                                                                    ");
		setQuote(quotation.quotes[idx].quote);
	  }
	  return;
  };
 
  // Default load a random quote
  useEffect(() => {
    getQuotes();
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
		<div className="bgBox">
		  <h3>Motivational Quotes</h3>
			<img src="https://images.unsplash.com/photo-1497561813398-8fcc7a37b567?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="motivation"/>
			<div className="bookEndBox"> quote: </div>
			<div className="quoteBox"> {quote} </div>
			<div className="bookEndBox"> You can Do it! </div>
			<button onClick={() => getQuotes()} >Get Quote</button>
		</div>
      </header>
	  
    </div>
  );
}

export default App;
