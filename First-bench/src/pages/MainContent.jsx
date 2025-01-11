import Chart from "../components/charts/Chart";
import RulerComponent from "../components/charts/Ruler";
import Approach from "../components/MainContent/Approach";
import CompareCard from "../components/MainContent/CompareCard";
import ImprovementCard from "../components/MainContent/ImprovementCard";
import Response from "../components/MainContent/Response";
import Suggestion from "../components/MainContent/Suggestion";

const MainContent = () => {
  return (
    <div>
      {/* Compare card goes here */}
      <div className="grid grid-cols-3 gap-4 my-2">
        <CompareCard />
        <CompareCard />
        <CompareCard />
      </div>
      {/* RESULT MARKS AND COMPARISON SECTION HERE */}
      <div className="grid grid-cols-4 gap-4 my-8">
        <ImprovementCard />
        <Response />
        <Approach />
        <Suggestion />
      </div>
      {/* CHARTS AND RULER GOES HERE */}
      <div className="grid grid-cols-2 gap-6 my-6">
        <Chart />
        <RulerComponent />
      </div>
    </div>
  );
};

export default MainContent;
