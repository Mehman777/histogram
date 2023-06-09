import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import ChartExample from "./components/ChartExample";
import TrackInvertedSlider from "./components/TrackInvertedSlider";
import Box from "@mui/material/Box";
import * as React from "react";
import HistogramChart from "./components/ChartExample1";
import ChartExample from "./components/ChartExample";
import {useEffect, useState} from "react";
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
//import ChartExample from "./components/ChartExample";
const initialList = [
    {
        id: 1,
        minValue: '3.2513548623',
        maxValue: '4.51564646851',
        year: 1988,
    },
    {
        id: 2,
        minValue: '5.2561589856',
        maxValue: '11.21561561465',
        year: 1990,
    },
];
const listReducer = (state, action) => {
    switch (action.type) {
        case 'REMOVE_ITEM':
            return {
                ...state,
                list: state.list.filter((item) => item.id !== action.id),
            };
        default:
            throw new Error();
    }
};

function App() {
    const [selected, setSelected] = useState();
    const[searchParams,setSearchParams]=useState([]);





    const onChangeVolume=(val)=>{
       setSelected(val)
    }

    function handleChangeList(vals){
        setSearchParams(vals.concat(""));
       // alert(JSON.stringify(searchParams))

    }
    const List1 = () => {
        alert(JSON.stringify(searchParams))
        return(
            <ul>
                {searchParams.map((item) => (
                    <Item key={item.id} item={item}  />
                ))}
            </ul>
        );
    }


    const Item = ({item}) => {
        if (item.id) {
            return (
                <li style={{fontSize: 14, color: "black", listStyle: "none"}}>

                    <span>{item.id}/</span>
                    <span>{item.minValue}-</span>
                    <span>{item.maxValue}</span>
                    <button type="button" className="btn-close" style={{color: "red"}} aria-label="Close"></button>

                </li>)
        }

    };
  return (
    <div className="App">
      <header className="App-header">
          <div className={"row"}>
              <div className={"col-6"}>
                    <ChartExample
                    selected={selected}
                    onChange={handleChangeList}
                    />
                  {/*<HistogramChart
                      selected={selected}
                  />*/}
                    <TrackInvertedSlider
                        olcu={[20,42]}
                        sendToParent={onChangeVolume}
                    />

              </div>
              <div className={"col-6"} >

                  <Box sx={{ width: 600,backgroundColor:"white",textAlign:"right" }}>
                      <div className="wrapper">
                          <List>
                              {searchParams.map((item) => {
                                  return (<Item key={item.id} item={item}/>)

                              })}


                          </List>
                      </div>
                  </Box>
              </div>
          </div>
      </header>
    </div>
  );


}

export default App;
