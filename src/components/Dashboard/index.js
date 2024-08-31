import { IoAlertCircleOutline } from "react-icons/io5";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import SideBar from "../SideBar";
import "./index.css";

const data2 = [
  {
    name: "6/30/2024 - 7/6/2024",
    orders: 4,
    sales: 1404,
    amt: 2400,
  },
  {
    name: "7/7/2024 - 7/13/2024",
    orders: 2,
    sales: 800,
    amt: 2210,
  },
  {
    name: "7/21/2024 - 7/27/2024",
    orders: 2,
    sales: 500,
    amt: 2290,
  },
];

const Dashboard = () => {
  const yAxisTickFormatter = (value) => {
    console.log(value);
    return `${value / 1000}k`;
  };
  return (
    <div className="dashbord">
      <SideBar />
      <div className="charts-container">
        <h1 className="dasboard-heading">Dashboard</h1>
        <div className="line-chart">
          <p className="linechart-paragraph">
            Sales vs Orders{" "}
            <span>
              <IoAlertCircleOutline className="alert-circle" />
            </span>
          </p>
          <hr />
          <div className="linechart-container">
            <LineChart
              width={600}
              height={300}
              data={data2}
              margin={{
                top: 20,
                right: 30,
                left: 10,
                bottom: 0,
              }}
              className="linechart"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis
                yAxisId="left"
                tickFormatter={yAxisTickFormatter}
                ticks={[0, 400, 800, 1200, 1600]}
              />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="sales"
                stroke="#066B6F"
                activeDot={{ r: 9 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="orders"
                stroke="#EA8212"
                interval={2}
              />
            </LineChart>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
