import { useState } from "react";

function BgChanger() {
  const [color, setColor] = useState("gray-600");
  return (
    <>
      <div className="w-full mt-4">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-gray-600/30">
          <div
            className={`max-w-lg mt-4 rounded-lg overflow-hidden shadow-lg bg-${color} p-6`}
          >
            <h2 className="text-xl font-semibold mb-4 text-white">
              BG changer project | Current color is :
            </h2>

            <div className="flex justify-between gap-4">
              <button
                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                onClick={() => setColor("green-600")}
              >
                Green
              </button>
              <button
                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                onClick={() => setColor("white")}
              >
                White
              </button>
              <button
                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                onClick={() => setColor("red-600")}
              >
                Red
              </button>
              <button
                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                onClick={() => setColor("gray-100")}
              >
                gray
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BgChanger;
