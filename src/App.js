import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ChartExample from "./components/ChartExample";
import TrackInvertedSlider from "./components/TrackInvertedSlider";
import Box from "@mui/material/Box";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className={"row"}>
              <div className={"col-6"}>
                    <ChartExample/>
                    <TrackInvertedSlider olcu={[20,42]} />
              </div>
              <div className={"col-6"} >
                  <Box sx={{ width: 600 }}></Box>
              </div>
          </div>
      </header>
    </div>
  );
}

export default App;
