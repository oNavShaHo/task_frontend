import React, { createContext, useState } from "react";
import Rts from "./routes";
import { ProductDataProvider } from "./context/context";

function App() {
  return (
    <ProductDataProvider>
      <div>
        <Rts />
      </div>
    </ProductDataProvider>
  );
}

export default App;
