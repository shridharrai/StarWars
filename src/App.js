import './App.css';
import { Container } from "@material-ui/core";
import Header from './components/Header/Header';
import Dropdown from './components/Dropdown/Dropdown';
import { useState } from 'react';
import Movies from './components/Movies/Movies';

function App() {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <>
      <Header></Header>
      <div className="app">
        <Container>
          <Dropdown setSelectedValue={setSelectedValue} selectedValue={selectedValue}></Dropdown>
          {
            selectedValue && (<Movies selectedValue={selectedValue} />)
          }
        </Container>
      </div>
    </>
  );
}

export default App;
