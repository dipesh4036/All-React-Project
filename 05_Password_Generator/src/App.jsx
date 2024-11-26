import React, { useEffect, useState } from "react";

const App = () => {
  const [text, settext] = useState("Password");
  const [length, setlength] = useState(6);
  const [number, setnumber] = useState("");
  const [char, setchar] = useState("");

  const calpass = () => {
    let result = "";
    let str = "abcdefghijklmnopqrstuvwxyz";

    if (number) str += 1234567890;
    if (char) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      result += str.charAt(randomIndex);
    }
    settext(result);
  };
  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://plus.unsplash.com/premium_photo-1681487746049-c39357159f69?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-center text-5xl font-extralight mt-10 text-orange-300">
            Password Generator
          </h1>

          <div className="flex flex-col items-center justify-center w-80 bg-black bg-opacity-70 m-auto mt-10 rounded-md text-orange-300 p-6 space-y-4">
            <div className="flex flex-col space-y-4 w-full">
              {/* Password Output Field */}
              <input
                className="h-12 rounded-md bg-gray-400 text-white px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Generated password"
                type="text"
                value={text}
                onChange={(e) => settext(e.target.value)}
                readOnly
              />

              {/* Password Length Slider */}
              <div className="flex flex-col text-blue-400 items-center space-y-2">
                <input
                  min={6}
                  max={20}
                  onChange={(e) => setlength(e.target.value)}
                  type="range"
                  className="w-full bg-gray-600 rounded-lg"
                />
                <label className="text-sm text-white">Length: {length}</label>
              </div>

              {/* Include Numbers Option */}
              <div className="flex items-center space-x-2">
                <input
                  onChange={(e) => setnumber(!number)}
                  type="checkbox"
                  id="include-numbers"
                  className="w-5 h-5 text-blue-500"
                />
                <label htmlFor="include-numbers" className="text-sm text-white">
                  Include Numbers
                </label>
              </div>

              {/* Include Special Characters Option */}
              <div className="flex items-center space-x-2">
                <input
                  onChange={(e) => setchar(!char)}
                  type="checkbox"
                  id="include-char"
                  className="w-5 h-5 text-blue-500"
                />
                <label htmlFor="include-char" className="text-sm text-white">
                  Include Special Characters
                </label>
              </div>

              {/* Generate Button */}
              <button
                onClick={calpass}
                className="bg-blue-500 text-white font-semibold rounded-md p-3 w-full mt-4 hover:bg-blue-400 transition-colors"
              >
                Generate Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
