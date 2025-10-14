import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css";
import App from "./App.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Books from "./components/Books/Books.jsx";
import BookManagement from "./components/BookManagement/BookManagement.jsx";
import Sale from "./components/Sale/Sale.jsx";
// Marshrutlar ro‘yxati
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "books", element: <Books /> },
      { path: "bookManagement", element: <BookManagement /> },
      { path: "sale", element: <Sale /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
