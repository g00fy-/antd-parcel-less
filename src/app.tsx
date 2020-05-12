import React, { FunctionComponent, useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";
import { Dashboard } from "./components/dashboard.component";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Test>Test this</Test>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};

export function Test({ children }) {
  return (
    <div>
      <Dashboard paragraph="a" title="B"></Dashboard>
      <Button type="primary">Primary</Button>
      <Button>{children}</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link">Link</Button>
    </div>
  );
}

console.log("works", document.getElementById("app"));

ReactDOM.render(<App />, document.getElementById("app"));

(module as any).hot.accept();
