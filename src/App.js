import "./App.css";
import Nav from "./components/Nav";
import Card from "./components/Card";
import data from "./data";

function App() {
  const dataFile = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="container">
      <Nav />
      {dataFile}
    </div>
  );
}

export default App;
