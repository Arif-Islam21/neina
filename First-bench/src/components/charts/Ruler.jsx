import { LuWatch } from "react-icons/lu";
import Ruler from "@scena/react-ruler";
import { useEffect, useRef } from "react";

const RulerComponent = () => {
  const rulerRef = useRef(null);

  useEffect(() => {
    if (rulerRef.current) {
      console.log("Current ruler red", rulerRef.current);
    }
  }, []);

  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg min-h-[30vh] p-4">
      <div className="flex justify-start items-center gap-2 text-gray-400">
        <h4 className="text-xl font-semibold">
          <LuWatch />
        </h4>
        <h4 className="text-xl font-semibold">Time Taken</h4>
      </div>
      <div className="w-full">
        <Ruler
          ref={rulerRef}
          type="horizontal"
          width={150}
          height={30}
          unit={10}
          mainLineSize={15}
          longLineSize={10}
          shortLineSize={7}
          backgroundColor="#f3f3f3"
          lineColor="#333"
          textColor="#333"
          style={{ margin: "20px 0" }}
        />
      </div>
    </div>
  );
};

export default RulerComponent;
