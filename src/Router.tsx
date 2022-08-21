import { Route, Routes } from "react-router-dom";

import { HomePage } from "./pages/Home";
import { PostPage } from "./pages/Post";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post/:slug" element={<PostPage />} />
    </Routes>
  )
} 