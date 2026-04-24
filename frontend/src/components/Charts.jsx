import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
];

export default function Charts() {
  return (
    <div className="bg-white p-4 rounded-xl shadow col-span-3">
      <h2 className="mb-3 font-semibold">Analytics</h2>

      <BarChart width={500} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" />
      </BarChart>
    </div>
  );
}