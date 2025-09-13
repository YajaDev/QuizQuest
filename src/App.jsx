import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Quiz from "./pages/quiz";
import NotFound from "./pages/NotFound";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
        <Route index element={<Home />}/>
        <Route path="quiz" element={<Quiz />}/>
      </Route>
    )
  );

  return (
    <RouterProvider router={router}/>
  )
}

export default App
