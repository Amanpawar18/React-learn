import { useState } from "react";

export default function Counter(props) {
  const { obj } = props;

  const [count, setCount] = useState(obj.startValue);
  return (
    <>
      <div className="w-ful mt-4">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-gray-600/30">
          <div className="max-w-lg rounded-lg overflow-hidden shadow-lg bg-white p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Counter Project | Counter Value is: {count}
            </h2>

            <div className="flex justify-between gap-4">
              <button
                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                onClick={() => setCount((count) => count + obj.diffValue)}
              >
                Increase Count
              </button>

              <button
                className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                onClick={() =>
                  setCount((count) => (count > 0 ? count - obj.diffValue : 0))
                }
              >
                Decrease Count
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
