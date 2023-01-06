import './App.css';

import SimpleForm from './LessonsComponents/Final/SimpleForm';
import SimpleFormBegin from './LessonsComponents/Begin/SimpleFormBegin';

function App() {
  return (
    <div className="App">
      {/* <SimpleForm /> */}
      <SimpleFormBegin />
      <h3>{process.env.REACT_APP_MESSAGE}</h3>
    </div>
  );
}

export default App;
