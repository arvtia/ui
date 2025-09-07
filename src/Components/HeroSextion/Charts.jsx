import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
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

export function StorageChart() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow">
      {/* Header */}
      <div className="py-4 justify-between flex px-4 gap-2">
        <p className="text-neutral-600 font-semibold text-md">Storage</p>

        {/* Dropdown - months */}
        <div className="relative">
          <select
            className="px-3 py-1 pr-8 text-sm font-medium rounded-md border border-neutral-300 bg-white shadow-sm 
                      text-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                      cursor-pointer appearance-none"
            defaultValue="Feb"
          >
            <option>Jan</option>
            <option>Feb</option>
            <option>Mar</option>
            <option>Apr</option>
            <option>May</option>
            <option>Jun</option>
            <option>Jul</option>
            <option>Aug</option>
            <option>Sep</option>
            <option>Oct</option>
            <option>Nov</option>
            <option>Dec</option>
          </select>

          {/* custom arrow */}
          <i className="bi bi-chevron-down absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500 text-sm pointer-events-none"></i>
        </div>
      </div>

      {/* ✅ Custom Legend OUTSIDE */}
      <div className="flex items-center gap-5 px-6 pb-5 pt-4">
        <div className="flex items-center gap-1">
          <span className="size-2 rounded-full bg-blue-600"></span>
          <span className="text-sm text-neutral-600">Documents</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="size-2 rounded-full bg-purple-500"></span>
          <span className="text-sm text-neutral-600">Sound</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="size-2 rounded-full bg-yellow-500"></span>
          <span className="text-sm text-neutral-600">Videos</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="size-2 rounded-full bg-green-500"></span>
          <span className="text-sm text-neutral-600">Photo</span>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barSize={10}>
          <CartesianGrid strokeDasharray="3 4" vertical={false} stroke="#e5e7eb" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis
            axisLine={false}
            tickLine={false}
            ticks={[0, 10, 20, 30, 40, 50, 100]}
            domain={[0, 100]}
            tickFormatter={(v) => `${v}GB`}
          />
          <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />
          <Bar dataKey="documents" stackId="a" fill="#2563eb" radius={[6, 6, 6, 6]} />
          <Bar dataKey="sound" stackId="a" fill="#a855f7"  radius={[6, 6, 6, 6]}/>
          <Bar dataKey="videos" stackId="a" fill="#f59e0b"  radius={[6, 6, 6, 6]}/>
          <Bar dataKey="photo" stackId="a" fill="#22c55e"  radius={[6, 6, 6, 6]}/>
        </BarChart>
      </ResponsiveContainer>

      {/* Bottom Section */}
      <div className="pt-5">
        <div className="relative rounded-lg bg-gradient-to-tr from-purple-200 to-purple-300 border-t border-l border-purple-500 p-5 overflow-hidden">
          {/* Image in right corner */}
          <img
            src="assests/images/ring.png"
            alt="ring"
            className="absolute -bottom-7 right-0 w-44 h-32 object-cover opacity-80 "
          />

          <p className="text-xl font-semibold text-neutral-800 py-5 relative z-10">
            How Ai assist your file?
          </p>
          <div className="w-fit py-2 px-4 cursor-pointer rounded-xl bg-black text-white text-lg relative z-10">
            Learn More
          </div>
        </div>
      </div>
    </div>
  );
}
