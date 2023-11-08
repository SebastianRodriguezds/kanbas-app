import './App.css';
import { Kanban } from './components/kanban/Kanban';

function App() {
  return (
    <div style={{padding: "5px"}}>
      <h1 style={{marginBottom:'20px'}}>
        Kanban UI
      </h1>
      <Kanban />
    </div>
  );
}

export default App;
