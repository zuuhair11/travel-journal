import Navbar from './components/Navbar' ;
import Cards from './components/Cards' ;
import data from './data/Data' ;

function App() {
    return (
        <div className="container">
            <Navbar />
            <Cards cards={ data } />
        </div>
    );
}


export default App ;
