import './App.css';
import ColorButton from './ColorButton';
import withColor from './withColor';
import ColorHeading from './ColorHeading'


function App() {
  return (
    <div >
      <main style={{maxWidth: "32rem"}}>
        <div style={{display: "flex", flexDirection : "column", gap: "1rem"}}>
          <h1>My Homework</h1>
          <ColorHeading>Click Me</ColorHeading>
          <ColorButton>Click me</ColorButton>
          <ColorButton/>
        </div>
      </main>
    </div>
  );
}

export default App;
