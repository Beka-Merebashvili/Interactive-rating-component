import { useState } from "react";
import Rate from "./components/rate";
import Result from "./components/Result";
import Globalstayle from "./styled-components/GlobalStyles";

function App() {
  const [submit, setSubmit] = useState(false);
  const [rate, setRate] = useState();
  return (
    <div>
      <Globalstayle />
      {submit ? (
        <Result rate={rate} />
      ) : (
        <Rate setSubmit={setSubmit} rate={rate} setRate={setRate} />
      )}
    </div>
  );
}

export default App;
