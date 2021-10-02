import './App.css';
import HeaderComponent from './components/headerComponent/headerComponent.jsx'
import HomeScreen from './screens/home';
import ContactComponent from './components/contactComponent/contactComponent';

function App() {
  return (
    <>
      <HeaderComponent/>
      <HomeScreen/>
      <ContactComponent/>
    </>
  );
}
 
export default App;
