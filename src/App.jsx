import React, { useState } from "react";
import { diffLines } from "diff";

const CodeCompare = () => {
  const [leftCode, setLeftCode] = useState("");
  const [rightCode, setRightCode] = useState("");
  const [diffOutput, setDiffOutput] = useState([]);

  const handleDiffCheck = () => {
    const diffResult = diffLines(leftCode, rightCode);
    setDiffOutput(diffResult);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-indigo-800 flex flex-col items-center font-sans text-gray-100">

      <main className="flex flex-col items-center w-full p-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Left Code Text Area with Tooltip */}
          <div className="relative group shadow-md rounded-lg p-5 border border-gray-300">
            <h2 className="text-lg font-semibold text-white mb-3">Left Code</h2>
            <textarea
              className="w-full p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              rows="14"
              placeholder="Paste original code here..."
              value={leftCode}
              onChange={(e) => setLeftCode(e.target.value)}
            />
            <div className="absolute bottom-0 right-0 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out bg-gray-800 text-white text-xs rounded px-2 py-1 shadow-lg">
              Original or baseline code snippet
            </div>
          </div>

          {/* Right Code Text Area with Tooltip */}
          <div className="relative group shadow-md rounded-lg p-5 border border-gray-300">
            <h2 className="text-lg font-semibold text-white mb-3">
              Right Code
            </h2>
            <textarea
              className="w-full p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              rows="14"
              placeholder="Paste updated code here..."
              value={rightCode}
              onChange={(e) => setRightCode(e.target.value)}
            />
            <div className="absolute bottom-0 right-0 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out bg-gray-800 text-white text-xs rounded px-2 py-1 shadow-lg">
              Modified or updated code snippet
            </div>
          </div>
        </div>

        <button
          className="px-8 py-3 bg-indigo-700 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-600 transform hover:scale-105 transition-transform duration-200 border border-violet-50"
          onClick={handleDiffCheck}
        >
          Check Diff
        </button>

        <div className="bg-white shadow-lg rounded-lg p-6 w-full border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Differences
          </h2>
          <div className="whitespace-pre-wrap text-sm leading-7">
            {diffOutput.length > 0 ? (
              diffOutput.map((part, index) => (
                <div
                  key={index}
                  className={`px-2 py-1 rounded transition-colors ${
                    part.added
                      ? "bg-green-100 text-green-700"
                      : part.removed
                      ? "bg-red-100 text-red-700"
                      : "text-gray-800"
                  }`}
                >
                  {part.value}
                </div>
              ))
            ) : (
              <p className="text-gray-500 italic">No differences found.</p>
            )}
          </div>
        </div>
      </main>

      <footer className="w-full p-4 bg-opacity-60 backdrop-blur-md text-gray-200 text-center text-xs">
        <p>Code Compare © 2024 | Designed by Tejas</p>
      </footer>
    </div>
  );
};

export default CodeCompare;
