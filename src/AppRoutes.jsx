import React, {Suspense} from 'react';
import {useRoutes} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import About from "./pages/about";
import Cooperation from "./pages/cooperation";
import FAQ from "./pages/faq";
import Feedback from "./pages/feedback";
import News from "./pages/news";
import Products from "./pages/products";
import SeparateNews from "./pages/separate-news";

const AppRoutes = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {index: true, element: <Home/>},
                {path: "about", element: <About/>},
                {path: "feedback", element: <Feedback/>},
                {path: "products", element: <Products/>},
                // {path: "cooperation", element: <Cooperation/>},
                // {path: "faq", element: <FAQ/>},
                // {path: "news", element: <News/>},
                // {path: "news/:id", element: <SeparateNews/>},
            ]
        },
        {path: "*", element: <NotFound/>},
    ]);

    return (
        <Suspense fallback={"Загрузка..."}>
            {routes}
        </Suspense>
    );
};

export default AppRoutes;