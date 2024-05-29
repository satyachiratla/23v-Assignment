import { createBrowserRouter } from "react-router-dom";
import ImageSearch from "./src/components/ImageSearch";
import ImageDetails from "./src/components/ImageDetails";
import NotFound from "./src/components/NotFound";

export const router = createBrowserRouter([
  { path: "*", element: <NotFound /> },
  { path: "/", element: <ImageSearch /> },
  { path: "/details", element: <ImageDetails /> },
]);
