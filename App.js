import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';

function App() {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => setDataTable(res.data))
      .catch(err => console.log(err))
  }, []);

  const column = [
    { heading: 'File Name', value: 'email' },
    { heading: 'File Type', value: 'name' }
   
  ]

  return (
    <div className="App">
      <h1>Dynamic Table</h1>
      <Table data={dataTable} column={column} />
    </div>
  );
}

export default App;