import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import BoardFooter from "./components/BoardFooter";
import BoardHeader from "./components/BoardHeader";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostDetail from "./components/PostDetail";
import Login from "./components/Login";
import "./style.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  constq [token , setToken] = useState(() => localStorage.getItem("accessToken"));

  return (
    <>
      <BoardHeader isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)}/>
      <Routes>
        <Route path="/" element={token ? <PostList token={token}/> : <Login onLogin={setToken} />} />
        <Route path="/posts" element={token ? <PostList token={token}/> : <Login onLogin={setToken} />} />
        <Route path="/posts/new" element={<PostForm onSave={setToken} />} />
        <Route path="/posts/:postId" element={<PostDetail token={token}/>} />
        <Route path="/login" element={<Login onLogin={setToken} />} />
      </Routes>
      <BoardFooter />
    </>
  )
}