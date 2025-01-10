import { MdKeyboardArrowDown } from "react-icons/md";

const CompareCard = () => {
  return (
    <div className="border-2 border-gray-300 rounded-xl min-h-[30vh] p-6">
      <div className="flex justify-start items-center">
        <h2 className="p-[1px] rounded-md text-center border-2 text-gray-400 mr-2 border-gray-400">
          <MdKeyboardArrowDown size={20} />
        </h2>
        <h2 className="font-semibold text-gray-400">Compare Accuracy</h2>
      </div>
    </div>
  );
};

export default CompareCard;
