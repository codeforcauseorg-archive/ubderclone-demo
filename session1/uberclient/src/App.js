import MainAppBar from './components/MainAppBar';
import { useState } from 'react';

function App() {

  let [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="App">
      <MainAppBar setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen}/>
    </div>
  );
}

export default App;
