import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./Routes/Home";
import PostsProvider from "./Context/PostsContext";
import CreatePost from "./Routes/CreatePost";
import Edit from "./Routes/Edit";
import { fetchSinglePost } from "./functions/fetchSinglePost";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/edit/:id" element={<Edit />} loader={fetchSinglePost} />
      </Route>
    )
  );
  return (
    <PostsProvider>
      <RouterProvider router={router} />
    </PostsProvider>
  );
}

export default App;
