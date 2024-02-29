import './App.css';

function App() {
  return (
    <div className="App">
      <div className='count-wrapper'>
        <div className='count-number'>0</div>
        <div className='count-controls'>
          <button className='btn increate'>+</button>
          <button className='btn reset'>Reset</button>
          <button className='btn decrease'>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
