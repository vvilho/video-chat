import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateRoom from "./routes/CreateRoom";
import Huone from "./routes/Room";
import "./App.css";

const App = () => {



  return (
      <div className="App">
          <BrowserRouter>
            <Switch>
              <Route
                  path= "/"
                  exact
                  component={CreateRoom}
              />
              <Route
                  path= "/room/:roomID"
                  component={Huone}
              />
            </Switch>
          </BrowserRouter>
      </div>
  );
}
export default App;
