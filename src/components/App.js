
import React ,{useState} from "react";
import './../styles/App.css';


const items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
  "Item 12",
  "Item 13",
  "Item 14",
  "Item 15",
  "Item 16",
  "Item 17",
  "Item 18",
  "Item 19",
  "Item 20",
  "Item 21",
  "Item 22",
  "Item 23",
  "Item 24",
  "Item 25",
  "Item 26",
  "Item 27",
  "Item 28",
  "Item 29",
  "Item 30",
];

const App = () => {
  const [data , setData] = useState([]);

const handle = ()=>{
  setData((prevData) => [...prevData, ...items.slice(prevData.length, prevData.length + 10)]);
}

  return (
    <div>
        {/* Do not remove the main div */}
        <button type="submit" onClick={handle}>Load More</button>
        <ul>
           
            {data.map((item ,index)=>{
              return(
                <li key={index}>

                 {item}
               </li>

              )
                
            })}
           
        </ul>
         
    </div>
  )
}

export default App
