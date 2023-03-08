
import './App.css';
import {Header} from './components/Header/Header';
import {Content} from './components/Content/Content';
import {Footer} from './components/Footer/Footer';
import {Container} from './components/Container/Container'


function App() {
  return (
    <div className="App">
       {/* <Header title="page title"/>
       <Content title="lorem ipsun" desc="react has been designed fron the start for gradual adoption" />
       <Footer copyright="all rights reserved"/> */}
      <Container />
      <Container />
    </div>
  );
}

export default App;
