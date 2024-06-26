import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./sections/Main";
import LoginPage from "./sections/LoginPage";
import DetailedPage from "./sections/DetailedPage";
import MessageListPage from "./sections/MessageListPage";
import Test from "./sections/Test";
import ReviewPage from "./sections/ReviewPage";
import ReviewSuccessPage from "./sections/ReviewSuccessPage";
import AnimalRegistration from "./sections/AnimalRegistration";
import AskPage from "./sections/AskPage";
import MyPageBottom from "./components/myPage/MyPageBottom";
import MyPage from "./sections/MyPage";
import MyPageEdit from "./sections/MyPageEdit";

function App() {
  const containerRef = useRef(null);

  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/main" element={<Main />} />
            <Route path="/detailedpage" element={<DetailedPage />} />
            <Route path="/test" element={<Test />} />
            <Route path="/message" element={<MessageListPage />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/review-success" element={<ReviewSuccessPage />} />
            <Route path="/registration" element={<AnimalRegistration />} />
            <Route path="/ask" element={<AskPage />} />
            <Route path="/mypagebottom" element={<MyPageBottom />} />
            <Route path="mypage" element={<MyPage />} />
            <Route path="mypageedit" element={<MyPageEdit />} />
          </Routes>
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}

export default App;
