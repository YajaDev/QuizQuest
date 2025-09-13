import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Quiz from "./pages/quiz";
import NotFound from "./pages/NotFound";
import Module from "./pages/Module";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
        <Route index element={<Home />}/>
        <Route path="quiz" element={<Quiz />}/>
        <Route path="module" element={<Module />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router}/>
  )
}

export default App
