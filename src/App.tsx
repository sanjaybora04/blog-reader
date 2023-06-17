import "./App.css";
import { PageReader } from "./components/PageReader";

function App() {

  return (
    <div className="App">
      <PageReader />
      <div id="content">
        <h1>this is a heading</h1>
        <p>this is a paragraph</p>
        <p>this is another paragraph</p>
      </div>
    </div>
  );
}

export default App;
