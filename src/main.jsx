import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { gitHubInfoLoader } from "./components/Github/Github.jsx";
import Projects from "./components/Projects/Projects.jsx";
import ContextLayout from "./components/ContextExp/ContextLayout.jsx";
import ReduxTodoLayout from "./components/ReduxTodo/ReduxTodoLayout.jsx";
import { Provider } from "react-redux";
import { store } from "../app/store.js";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="context" element={<ContextLayout />}></Route>
      <Route path="redux-todo" element={<ReduxTodoLayout />}></Route>
      <Route path="practice-projects" element={<Projects />}></Route>
      <Route path="user/:userId" element={<User />}></Route>
      <Route
        path="github"
        loader={gitHubInfoLoader}
        element={<Github />}
      ></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
