import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./styles/fonts.scss"
import "./styles/global.scss"
import "./styles/reset.scss"
import "./styles/utilities.scss"

import HomePage from "./pages/HomePage.tsx"
import PokemonDetailPage from "./pages/PokemonDetailPage.tsx";
import RandomPokemonPage from "./pages/RandomPokemonPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/pokemon/:index",
    element: <PokemonDetailPage/>
  },
  {
    path: "/random",
    element: <RandomPokemonPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
