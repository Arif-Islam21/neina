import { FaRecycle } from "react-icons/fa";

const Chart = () => {
  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg min-h-[30vh] p-4">
      <div className="flex justify-start items-center gap-2 text-gray-400">
        <h4 className="text-xl font-semibold">
          <FaRecycle />
        </h4>
        <h4 className="text-xl font-semibold">Compare Accuracy</h4>
      </div>
    </div>
  );
};

export default Chart;
