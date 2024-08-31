import { IoAlertCircleOutline } from "react-icons/io5";
import { PieChart, Pie, Cell } from "recharts";
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

const data = [
  { name: "WooCommerce store", value: 1483.722 },
  { name: "Shopify store", value: 1175.278 },
];
const COLORS = ["#DC5657", "#08F3BC"];
const RADIAN = Math.PI / 180;

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
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div className="dashbord">
      <SideBar />
      <div className="charts-container">
        <h1 className="dasboard-heading">Dashboard</h1>
        <div className="chart-container">
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
          <div className="piechart">
            <p className="linechart-paragraph">
              Portion of Sales{" "}
              <span>
                <IoAlertCircleOutline className="alert-circle" />
              </span>
            </p>
            <hr />
            <div className="piechart-container">
              <PieChart width={200} height={200}>
                <Pie
                  data={data}
                  cx={100}
                  cy={100}
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  startAngle={0}
                  endAngle={360}
                  fill="#8884d8"
                  dataKey="value"
                  clockwise={true}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </div>
            <div className="pichart-label-line-container">
              <div className="pichart-formates">
                <div className="dot1"></div>
                <p className="pichart-label-line">WooCommerce store</p>
              </div>
              <div className="pichart-formates">
                <div className="dot1 dot2"></div>
                <p className="pichart-label-line">Shopify store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
