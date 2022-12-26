import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        
        <h1>Should you use a dropdown?</h1>
        <select className='dropdown-search-box'>
          <option value="" disabled selected>Select</option>
          <option>Yes</option>
          <option>Probably not</option>
        </select>
        {/* </center> */}
      </div>  
    </div>
  );
}

export default App;
