import "./App.css";
import Shop from "./components/Shop";
import Header from "./components/Header";
import ShopContextProvider from "./store/ShopContext";

function App() {
  
  return (
    <ShopContextProvider>
      <Header />
      <Shop />
    </ShopContextProvider>
  );
}

export default App;
