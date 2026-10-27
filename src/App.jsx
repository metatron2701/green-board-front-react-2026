import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import BoardFooter from "./components/BoardFooter";
import BoardHeader from "./components/BoardHeader";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostDetail from "./components/PostDetail";
import Login from "./components/Login";
import "./style.css";
import { useAuthContext } from "./useAuthContext";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {token} = useAuthContext();

  return (
    <>
      <BoardHeader />
      <Routes>
        <Route path="/" element={token ? <PostList /> : <Login />} />
        <Route path="/posts" element={token ? <PostList /> : <Login />} />
        <Route path="/posts/new" element={token ? <PostForm /> : <Login />} />
        <Route path="/posts/:postId" element={token ? <PostDetail/> : <Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <BoardFooter />
    </>
  )
}