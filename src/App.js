import './App.css';
import Form from './components/Form';
import input from './form.json'
function App() {
  return (
    <div className="App">
     <Form inputs={input.inputs} />
    </div>
  );
}

export default App;
