import { createBrowserRouter } from "react-router-dom";
import ImageSearch from "./src/components/ImageSearch";
import ImageDetails from "./src/components/ImageDetails";

export const router = createBrowserRouter([
  { path: "/", element: <ImageSearch /> },
  { path: "/details", element: <ImageDetails /> },
]);
