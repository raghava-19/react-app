import './App.css';
import Parlour from './components/Parlour';

import Header from './components/Header'
import Footer from './components/Footer';

// funcyional components
function App() {
  return (
    <div><Header />
      <div className='center'><Parlour /></div>
    <Footer /></div>
  );
}

export default App;
