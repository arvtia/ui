import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", documents: 10, sound: 10, videos: 20, photo: 10 },
  { name: "Feb", documents: 20, sound: 15, videos: 25, photo: 40 },
  { name: "Mar", documents: 30, sound: 25, videos: 10, photo: 15 },
  { name: "Apr", documents: 15, sound: 20, videos: 10, photo: 20 },
  { name: "May", documents: 20, sound: 10, videos: 5, photo: 10 },
];

export default function StorageChart() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barSize={10}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis
            axisLine={false}
            tickLine={false}
            ticks={[0, 10, 20, 30, 40, 50, 100]}
            domain={[0, 100]}
            tickFormatter={(v) => `${v}GB`}
          />
          <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }}  />
          <Legend
            verticalAlign="top"
            align="left"
            iconType="circle"
            wrapperStyle={{ paddingBottom: "20px" }}
          />
          <Bar dataKey="documents" stackId="a" fill="#2563eb" radius={[8, 8, 8, 8]} />
          <Bar dataKey="sound" stackId="a" fill="#a855f7" radius={[8, 8, 8, 8]} />
          <Bar dataKey="videos" stackId="a" fill="#f59e0b" radius={[8, 8, 8, 8]} />
          <Bar dataKey="photo" stackId="a" fill="#22c55e" radius={[8, 8, 8, 8]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
