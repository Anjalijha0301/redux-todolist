import { createRoot } from "react-dom/client";
import "./index.css";
import { StrictMode } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import TodoListNew from "./components/TodoListNew.jsx";
import UseEffectExmples from "./components/UseEffectExmples.jsx";
import UseRefExample from "./components/UseRefExample.jsx";
import UserList from "./components/UserList.jsx";
import UseCallbackParent from "./components/UseCallbackParent.jsx";
import UseCallbackChild from "./components/UseCallbackChild.jsx";

// Define routes directly without using <Router>
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} />
      <Route path="todo-list" element={<TodoListNew />} />
      <Route path="useeffect-examples" element={<UseEffectExmples />} />
      <Route path="useref-examples" element={<UseRefExample />} />
      <Route path="user-list" element={<UserList />} />
      <Route path="usecallback" element={<UseCallbackParent />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>
);
