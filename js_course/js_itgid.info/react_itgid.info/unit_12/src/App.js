import "./App.css";
import CartList from "./containers/CartList";
import GoodsList from "./containers/GoodList";

function App() {
    return (
        <div className="App">
            <GoodsList />
            <CartList />
        </div>
    );
}

export default App;
