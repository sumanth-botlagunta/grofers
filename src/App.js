import './App.css';
import Navbar from './Navbar';
import Banner from './Banner';
import TodayDeals from './TodayDeals';
import Categories from './Categories';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <TodayDeals />
      <Categories />
    </div>
  );
}

export default App;
