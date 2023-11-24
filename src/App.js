import { Content } from './components/Content';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="Page">
        <Header/>
        <main className="Main">
          <div className="ApplicationPage">
            <Sidebar/>
            <Content/>
            <Navigation/>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
