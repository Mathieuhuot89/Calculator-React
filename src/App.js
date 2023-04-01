import Wrapper from "./components/Wrapper";
import Button from "./components/Button";
import ButtonBox from "./components/ButtonBox";
import Screen from "./components/Screen";
import { useState } from "react";

function App() {

  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  const [calc, setCalc] = useState({
    sign: "",
    nul:0,
    res:0
  })

  


  return (
    <Wrapper>
      <Screen value='0' />
      <ButtonBox>
        {
          btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={() => {
                  console.log(`${btn} clicked!`);
                }}
              />
            );
          })
        }
      </ButtonBox>
    </Wrapper>
  )
}

export default App;
