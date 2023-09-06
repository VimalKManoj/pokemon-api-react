import './index.css';
import InputWrapper from './Components/InputWrapper';
import ContentWrapper from './Components/ContentWrapper';
import { useState } from 'react';

function App() {
  const [search,setSearch] = useState([])
  return (
    <>
   <InputWrapper setSearch={setSearch}/>
   <ContentWrapper search={search}/>
   </>
  );
}

export default App;
