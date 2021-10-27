import React from "react";

import HomeComponent from "./pages/home/Home";
import { CounterComponent } from "./pages/counter/Counter";

export default function App() {
  return (
    <div
      style={{ display: "grid", placeContent: "center", minHeight: "100vh" }}
    >
      <CounterComponent />
      <HomeComponent />
    </div>
  );
}
