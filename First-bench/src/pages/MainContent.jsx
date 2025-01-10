import CompareCard from "../components/MainContent/CompareCard";
import ImprovementCard from "../components/MainContent/ImprovementCard";
import Response from "../components/MainContent/Response";

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
      </div>
    </div>
  );
};

export default MainContent;
