import './App.css';
import Navbar from './Navbar';
import Banner from './Banner';
import TodayDeals from './TodayDeals';
import Categoryapi from './Categoryapi';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <TodayDeals />
      <Categoryapi />
    </div>
  );
}

export default App;
