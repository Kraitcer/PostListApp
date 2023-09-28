import { createBrowserRouter } from "react-router-dom";
import PostList from "./PostList";
import EachPost from "./EachPost";

const router = createBrowserRouter([
  { path: "/", element: <PostList /> },
  { path: "/:id", element: <EachPost /> },
]);
export default router;
