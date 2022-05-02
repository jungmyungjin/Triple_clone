import { BrowserRouter, Route, Routes } from "react-router-dom";
import Triple from "./Triple";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* :coinID -> url이 변수값을 갖는다는것을 의미한다 */}
        {/*  /* -> 하위 경로가 있다는 것을 의미한다. */}
        {/*<Route path="/:coinId/*" element={<Coin isDark={isDark} />} />*/}
        {/* <Route path="/:coinId/*" element={<Coin />} /> */}
        <Route path="/" element={<Triple />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
