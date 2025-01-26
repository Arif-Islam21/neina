import { Routes, Route } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home/Home";
import Strategies from "../Pages/Strategies/Strategies";
import Backtesting from "../Pages/Backtesting/Backtesting";
import MarketFeed from "../Pages/MarketFeed/MarketFeed";
import Learn from "../Pages/Learn/Learn";
const HomeRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/strategy" element={<Strategies />} />
        <Route path="/backtesting" element={<Backtesting />} />
        <Route path="/market-news" element={<MarketFeed />} />
        <Route path="/404" element={<Learn />} />
      </Route>
    </Routes>
  );
};

export default HomeRoute;
