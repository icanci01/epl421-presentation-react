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
        console.log(rowValue)
    }

    const changeDir = (rowValue) => {
      path = path +'/' +rowValue
      console.log(path)
    }

    const goBack = () => {
        path = path.slice(0, path.lastIndexOf('/'));
        console.log(path)
      }

  const TableRow = ({ item, column }) => (
    <tr>
      {column.map((columnItem, index) => {
        if (`${columnItem.value}` === "email") {//For file list
            if(item[`name`] === "Leanne Graham")//If file download on click
                return <td  onClick={() => changeDir(item[`${columnItem.value}`])} > {item[`${columnItem.value}`]}  </td>//If folder change directory on click
           
            return <td class = 'tbrows' onClick={() => downloadFile(item[`${columnItem.value}`])} > {item[`${columnItem.value}`]}  </td>
    
        }
        return <td > {item[`${columnItem.value}`]}  </td>
      })}
    </tr>
  )
  
  export default Table