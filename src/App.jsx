import NavBar from "./components/NavBar";
import getJsonData from "./GetJsonData";


function App() {
  return (
    <div>
      <main>
      <NavBar />
      <div className="">
      {
        console.log(getJsonData)
      }
      </div>
      </main>
    </div>
  );
}

export default App;
