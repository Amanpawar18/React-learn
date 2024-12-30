import React from "react";
import ContextForm from "./ContextForm";
import ContextResult from "./ContextResult";
import UserContextProvider from "./UserContextProvider";

function ContextLayout() {
  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <UserContextProvider>
              <ContextResult />
              <ContextForm />
            </UserContextProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContextLayout;
