import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Charts({ data }) {
  if (!data) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow col-span-3 text-center">
        Upload a CSV to see analytics 🚀
      </div>
    );
  }

  // Convert backend data
  const chartData = Object.entries(data.summary.mean).map(([key, value]) => ({
    name: key,
    high: value,
    low: value * 0.6, // fake second line for styling
  }));

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow col-span-3">
      <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-white">
        📊 Data Insights
      </h2>

      {/* 🔥 AREA CHART (LIKE FIRST IMAGE) */}
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorHigh" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="colorLow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8153FB" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8153FB" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="name" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="high"
            stroke="#22c55e"
            fillOpacity={1}
            fill="url(#colorHigh)"
            strokeWidth={3}
          />

          <Area
            type="monotone"
            dataKey="low"
            stroke="#8153FB"
            fillOpacity={1}
            fill="url(#colorLow)"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>

      {/* 🔥 BAR CHART (LIKE SECOND IMAGE) */}
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />

          <Bar dataKey="high" fill="#22c55e" radius={[6, 6, 0, 0]} />
          <Bar dataKey="low" fill="#f87171" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      {/* 🔥 Prediction */}
      <div className="mt-4 text-center">
        <p className="text-gray-500 dark:text-gray-300 text-sm">
          Predicted Value
        </p>
        <h3 className="text-2xl font-bold text-[#8153FB]">
          {data.prediction.toFixed(2)}
        </h3>
      </div>
    </div>
  );
}