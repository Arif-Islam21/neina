import image from "../../../public/images/moneyyTech.png";
import "./styles.css";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  Area,
  LabelList,
} from "recharts";

const Chart = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 center",
        // backgroundSize: "contain",
      }}
      className="min-h-[50vh] relative"
    >
      <div className="relative px-[10vw]  w-full h-[50vh] ">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
          >
            <Tooltip />
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E3F0FF" stopOpacity={1} />
                <stop offset="100%" stopColor="#EDF4FF" stopOpacity={1} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#E4F0FF)"
            />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2}>
              <LabelList dataKey="name" position="top" />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
