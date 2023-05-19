import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SideBar from "./components/SideBar";
import FormPayment from "./components/FormPayment"
import ClassComponents from "./views/LifeCycle/ClassComponents";
import FunctionComponents from "./views/LifeCycle/FunctionComponents";
import DashBoard from "./components/DashBoard";
import "./App.css";
import React from "react";
import { SideBarItemProps } from "./components/SideBar/types";
import { PaymentDetailsItemProps } from "./components/FormPayment/type";

function App() {

  return <DashBoard />
}

export default App;
