import React, { useState } from 'react';
import { Rows } from './Rows';

type IProps = {
  labels: Array<string>
  setString: any
  remove: any
}

export type IPropItems = {
  items: IProps
}

const buttonsGroup: Array<Array<string>> = [["C", "%", "<-", "/"], ["7", "8", "9", "*"], ["4", "5", "6", "-"], ["1", "2", "3", "+"], ["00", "0", ".", "="]];

function App() {
  const [evalString, setEvalString] = useState<string>("");

  const setValue = (val: string) => {
    if (val === "<-") {
      setEvalString(evalString.substring(0, evalString.length - 1));
    } else if (val === "C") {
      setEvalString("");
    } else if (val === "=") {
      setEvalString(String(eval(evalString)));
    } else if (val === "0") {
      if (evalString !== "") {
        setEvalString(evalString + val);
      }
    } else {
      setEvalString(evalString + val);
    }
  }

  const remove = () => {
    setEvalString(evalString.substring(0, evalString.length - 1));
  }

  const renderRows = () => {
    return (
      buttonsGroup.map((labels) => {
        var items: IProps = {
          labels: labels,
          setString: setValue,
          remove: remove
        }
        return <Rows items={items} />
      })
    );
  }

  return (
    <div>
      <div className='container'>
        <div className='row mb-2 mt-4'>
          <label className="form-label">calculated Result</label>
          <input className="form-control" type="text" value={evalString} aria-label="result"></input>
        </div>
        {
          renderRows()
        }
      </div>
    </div>
  );
}

export default App;
