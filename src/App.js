import "./App.css";
import Hello from "./components/Hello";
import States from "./components/States";
import Use_effect from "./components/Use_effect";
import Use_ref from "./components/Use_ref";
function App() {
  var myName = "Daphne";
  function alertMyName() {
    alert(myName);
  }
  return (
    <>
      <button
        className="m-2 border-slate-200 bg-slate-200 border rounded-sm"
        onClick={alertMyName}
      >
        button
      </button>
      <Hello
        firstNAme="Daphne"
        lastName="Chepkirui"
        email="something@gmail.com"
      />{" "}
      {/* components */}
      <Hello firstNAme="Davie" lastName="White" email="nothing@gmail.com" />
      <States />
      <Use_effect/>
      <Use_ref/>
    </>
  );
}

export default App;
