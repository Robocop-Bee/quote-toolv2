import './App.css'
import InputPage from './components/inputcomponent/InputPage';
// import ResultPage from './components/resultscomponent/ResultPage';



// Object properties will be {text, value, key} 2 objects for both current and new

function App() {
  return (
    <div className="App">
      <InputPage/>
      {/* <ResultPage data={data}/> */}
    </div>
  );
}

export default App;
