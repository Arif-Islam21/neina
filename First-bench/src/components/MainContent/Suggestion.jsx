import { BsStars } from "react-icons/bs";

const Suggestion = () => {
  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg min-h-[30vh] p-4">
      <div className="flex justify-start items-center gap-2 text-gray-400">
        <h4 className="text-xl font-semibold">
          <BsStars />
        </h4>
        <h4 className="text-xl font-semibold">Improvements</h4>
      </div>
      <h2 className="text-xl text-black font-semibold mt-2">
        Subject Understanding
      </h2>
    </div>
  );
};

export default Suggestion;
