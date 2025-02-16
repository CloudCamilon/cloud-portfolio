"use client";

import ComingSoon from "./coming-soon";
import Home from "./home";

export default function Main() {
  return false ? <ComingSoon /> : <Home />;
}
