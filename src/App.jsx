import "./style.css";
import BoardHeader from "./components/BoardHeader.jsx";
import PostList from "./components/PostList.jsx";
import BoardFooter from "./components/BoardFooter.jsx";
import { useState } from "react";

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
        title: `임시 계시글 ${currentPosts.length}`,
        authorNickname: "test_nickname03",
        createdDatetime: "2026-10-04",
        content: "test_content03"
      },
      ...currentPosts
    ]);
  }

  return (
    <>
      <BoardHeader />
      <main>
        <h1>게시판</h1>

        <p id="list-message" role="status">게시물 목록</p>
        <button id="retry-list" type="button">목록 다시 시도</button>

        <PostList posts={posts} onSelect={(post) => window.alert(post.id)}/>
        <button type="button" onClick={addPracticePost}>임시 게시글</button>

        <div className="pagination" aria-label="페이지 이동">
          <button id="previous-page" type="button" disabled>이전</button>
          <span id="page-number">1페이지</span>
          <button id="next-page" type="button" disabled>다음</button>
        </div>
      </main>

      <BoardFooter />
    </>
  );
}