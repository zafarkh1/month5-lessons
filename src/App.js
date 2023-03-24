import { useTranslation } from "react-i18next";
import Translation from "./components/Translation";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
			<Translation />
      </header>
    </div>
  );
}

export default App;
