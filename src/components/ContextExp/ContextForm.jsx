import React, { useContext, useState } from "react";
import UserContext from "./UserContext";

function ContextForm() {
  const [name, setName] = useState("");

  const { setUser } = useContext(UserContext);

  const submit = (e) => {
    e.preventDefault();
    setUser(name);
  };

  return (
    <form onSubmit={submit} className="p-6 flex flex-col justify-center">
      <div className="flex flex-col">
        <label htmlFor="name" className="hidden">
          Full Name
        </label>
        <input
          type="name"
          name="name"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Full Name"
          className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
      >
        Submit
      </button>
    </form>
  );
}

export default ContextForm;
