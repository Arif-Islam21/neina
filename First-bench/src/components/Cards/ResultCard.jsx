import { IoBagCheckOutline } from "react-icons/io5";

const ResultCard = () => {
  return (
    <div className="card bg-base-100 w-full">
      <div>
        <IoBagCheckOutline size={24} />
        <div>
          <h4>You Have Passed</h4>
          <h2>
            <span>136</span>/140
          </h2>
        </div>
        <div>
          <h3>76%</h3> <span>Accuracy</span>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
