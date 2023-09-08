import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { Home, ProductPage, Store } from "./pages";

const App = () => {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product/:productID" element={<ProductPage />} />
      </Routes>
    </main>
  );
};

export default App;
