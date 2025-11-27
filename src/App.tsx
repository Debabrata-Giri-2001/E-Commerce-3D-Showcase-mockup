import Footer from "./components/Footer"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes, } from "react-router-dom"
import NotFound from "./components/NotFound";
import Product from "./components/Product/[id]";
import Products from "./components/Products";


const RoutesRenderer = () => {
  return (
    <main className="flex-grow bg-gray-50 min-h-[80vh] flex flex-col items-center p-4">
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Main />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        {/* Specific routes */}

        {/* Catch-all for non-matching URLs */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

function App() {


  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen font-sans antialiased">
        <Navbar />
        <RoutesRenderer />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
