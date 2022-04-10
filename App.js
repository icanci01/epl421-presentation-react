import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';

function App() {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
     const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ path: '.' })
        };
        console.log("ddd")
        fetch("/list",requestOptions)
        .then(response => 
          response.json().then(data => ({
              data: data,
              status: response.status
          })
      ).then(res => {
        setDataTable(res.data)
      }));
  }, []);

  const column = [
    { heading: 'File Name', value: 'name' },
    { heading: 'File Type', value: 'type' }
   
  ]

  return (
    <div className="App">
      <h1>Dynamic Table</h1>
      <Table data={dataTable} column={column} />
    </div>
  );
}

export default App;