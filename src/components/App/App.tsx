import Header from "../Header/header";
import Search from "../Search/search";

import "./app.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Search />
      <div className="app-body"></div>
    </div>
  );
}

export default App;
