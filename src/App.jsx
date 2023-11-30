import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Series from "./components/Series/Series";
import Teams from "./components/Teams/Teams";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import LiveScore from "./components/LiveScore/LiveScore";
import LiveScoreSinglePage from "./components/LiveScoreSinglePage/LiveScoreSinglePage";
import LiveScoreNewsSinglePage from "./components/LiveScoreNewsSinglePage/LiveScoreNewsSinglePage";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/LiveScore" element={<LiveScore />} />
            <Route path="/Series" element={<Series />} />
            <Route path="/Teams" element={<Teams />} />
            <Route path="/News" element={<News />} />
            <Route path="/LiveScoreSinglePage/:id" element={<LiveScoreSinglePage />} />
            <Route path="/LiveScoreNewsSinglePage/:id" element={<LiveScoreNewsSinglePage />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
