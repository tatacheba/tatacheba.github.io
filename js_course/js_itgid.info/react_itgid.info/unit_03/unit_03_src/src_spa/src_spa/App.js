import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Category from "./Category";
import CategoryDescription from "./CategoryDescription";
import Footer from "./Footer";
import About from "./About";
import Error from "./Error";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const dataSite = {
    header: [
        { link_nav: "/", text: "Главная" },
        { link_nav: "/about", text: "О сайте" },
        { link_nav: "/cat", text: "Категории" },
    ],
    categoryName: [
        {
            link_nav: "/notebook",
            text: "Ноутбуки",
        },
        {
            link_nav: "/monitor",
            text: "Мониторы",
        },
        {
            link_nav: "/cellphone",
            text: " Мобильные телефоны",
        },
    ],
};

function App() {
    return (
        <Router>
            <Header data={dataSite} />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/cat"
                    element={<Category data={dataSite.categoryName} />}
                />
                <Route path="/cat/:name" element={<CategoryDescription />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

export default App;
