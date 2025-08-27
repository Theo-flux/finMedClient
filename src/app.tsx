import { RouterProvider, createRouter } from "@tanstack/react-router";
// Import the auto generated route tree
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

export default function App() {
  return <RouterProvider router={router} />;
}
