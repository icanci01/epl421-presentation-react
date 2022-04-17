import './Table.css'


let path = ''


const Table = ({ data, column }) => {
    return (
      <table>
          <td onClick={() => goBack()}>..</td>
        <thead>
          <tr>
            {column.map((item, index) => <TableHeadItem item={item} />)}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => <TableRow item={item} column={column} />)}
        </tbody>
      </table>
    )
  }
  
  const TableHeadItem = ({ item }) => <th>{item.heading}</th>

    const downloadFile = (rowValue) => {
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filename: rowValue })
        };
    
        fetch("/download",requestOptions)
        .then(res => {console.log(res.json())
        })
        

    }

    const changeDir = (rowValue) => {
      path = path +'/' +rowValue


       const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ path: path })
        };
        console.log("ddd")
        fetch("/list",requestOptions)
        .then(response => 
          response.json().then(data => ({
              data: data,
              status: response.status
          })
      ).then(res => {
        console.log(Table.data)
      }));

    }

    const goBack = () => {
        path = path.slice(0, path.lastIndexOf('/'));
        console.log(path)
      }

  const TableRow = ({ item, column }) => (
    <tr>
      {column.map((columnItem, index) => {
        if (`${columnItem.value}` === "name") {//For file list
            if(item[`type`] === "d")//If file download on click
                return <td  onClick={() => changeDir(item[`${columnItem.value}`])} > {item[`${columnItem.value}`]}  </td>//If folder change directory on click
           
            return <td class = 'tbrows' onClick={() => downloadFile(item[`${columnItem.value}`])} > {item[`${columnItem.value}`]}  </td>
    
        }
        return <td > {item[`${columnItem.value}`]}  </td>
      })}
    </tr>
  )
  
  export default Table