import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import BoardFooter from "./components/BoardFooter";
import BoardHeader from "./components/BoardHeader";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostDetail from "./components/PostDetail";
import Login from "./components/Login";
import "./style.css";

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "test_title01",
      authorNickname: "test_nickname01",
      createdDatetime: "2026-10-04",
      content: "test_content01"
    },
    {
      id: 2,
      title: "test_title02",
      authorNickname: "test_nickname02",
      createdDatetime: "2026-10-04",
      content: "test_content02"
    },
  ]);

  function addPracticePost() {
    const id = Date.now();
    setPosts((currentPosts) => [
      {
        id, 
        title: `임시 게시글 ${currentPosts.length}`, 
        authorNickname: "학생", 
        createdDatetime: "2026-10-04"
      },
      ...currentPosts,
    ]);
  }

  function savePost(post) {
    setPosts((currentPosts) => [
      {id:Date.now(), ...post, authorNickname: "학생", createdDatetime: "2026-10-04"},
      ...currentPosts,
    ]);
  }

  return (
    <>
      <BoardHeader />
        <Routes>
          <Route path="/" element={<PostList posts={posts} onAddPracticePost={addPracticePost} />} />
          <Route path="/posts" element={<PostList posts={posts} onAddPracticePost={addPracticePost} />} />
          <Route path="/posts/new" element={<PostForm onSave={savePost} />} />
          <Route path="/posts/:postId" element={<PostDetail />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      <BoardFooter />
    </>
  )
}