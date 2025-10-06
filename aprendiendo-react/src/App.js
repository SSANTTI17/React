import "./App.css";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="container">
      <Sidebar/>
      <main className="content">
        <h1>Contenido</h1>
      </main>
    </div>
  );
}

export default App;
