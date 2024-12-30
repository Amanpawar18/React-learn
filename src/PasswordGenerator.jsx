import React, { useCallback, useEffect, useRef, useState } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [spclCharAllowed, setSpclCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useCallback is a React Hook that lets you cache a function definition between re-renders.
  // useCallback(fn, dependencies)

  const PasswordGeneratorFn = useCallback(() => {
    let pass = "";
    let str = "QERTYUIOPASDFGHJKLZXCVBNM";

    if (numberAllowed) str += "1234567890";
    if (spclCharAllowed) str += "@#$%^&*()";

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    setPassword(pass);
  }, [length, numberAllowed, spclCharAllowed, setPassword]);

  // useEffect is a React Hook that lets you synchronize a component with an external system.
  // useEffect(setup, dependencies?)
  // Example 1: Do Something When the App Starts (Component Mounts)
  // Example 2: Do Something When a Value Changes
  // Example 3: Clean Up After Yourself

  useEffect(() => {
    PasswordGeneratorFn();
  }, [length, numberAllowed, spclCharAllowed, PasswordGeneratorFn]);

  // useRef is a React Hook that lets you reference a value that’s not needed for rendering.
  // const ref = useRef(initialValue)

  const passwordRef = useRef(null);

  const copyToClipboard = () => {
    // to select the password
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  };

  return (
    <>
      <div className="w-full mt-4">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-gray-600/30">
          <div
            className={`max-w-lg mt-4 rounded-lg overflow-hidden shadow-lg bg-white p-6`}
          >
            <h2 className="text-xl font-semibold mb-4 text-black">
              Password generator
              <br />
              <small>Generated password for length: {length}</small>
            </h2>
            <div className="w-full max-w-md- mx-auto  text-black">
              <input
                type="text"
                value={password}
                className="outline-none w-full py-1 px-3 text-white"
                placeholder="Password"
                ref={passwordRef}
                readOnly
              />
              <button
                onClick={copyToClipboard}
                className="outline-none mt-3 bg-blue-700 text-white px-3 py-0.5 shrink-0"
              >
                Copy
              </button>
            </div>
            <div className="flex text-sm gap-x-2 mt-4">
              <div className="flex items-center gap-x-1">
                <input
                  type="range"
                  min={6}
                  max={20}
                  value={length}
                  className="cursor-pointer"
                  onChange={(e) => {
                    setLength(e.target.value);
                  }}
                />
                <label className="text-black">Length: {length}</label>
              </div>
            </div>
            <div className="flex text-sm gap-x-2 mt-4">
              <div className="flex items-center gap-x-1">
                <input
                  type="checkbox"
                  min={6}
                  max={100}
                  value={length}
                  className="cursor-pointer"
                  id="numberInput"
                  onChange={() => {
                    setNumberAllowed((numberAllowed) => !numberAllowed);
                  }}
                />
                <label htmlFor="numberInput" className="text-black">
                  Number Allowed
                </label>
              </div>
            </div>
            <div className="flex text-sm gap-x-2 mt-4">
              <div className="flex items-center gap-x-1">
                <input
                  type="checkbox"
                  min={6}
                  max={100}
                  value={length}
                  className="cursor-pointer"
                  id="charInput"
                  onChange={() => {
                    setSpclCharAllowed((spclCharAllowed) => !spclCharAllowed);
                  }}
                />
                <label htmlFor="charInput" className="text-black">
                  special char Allowed
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
