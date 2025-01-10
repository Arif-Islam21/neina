import CompareCard from "../components/MainContent/CompareCard";

const MainContent = () => {
  return (
    <div>
      {/* Compare card goes here */}
      <div className="grid grid-cols-3 gap-4">
        <CompareCard />
        <CompareCard />
        <CompareCard />
      </div>
    </div>
  );
};

export default MainContent;
