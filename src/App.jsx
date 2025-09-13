import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Quiz from "./pages/quiz";


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}/>
z        <Route path="quiz" element={<Quiz />}/>
      </Route>
    )
  );

  return (
    <RouterProvider router={router}/>
  )
}

export default App
