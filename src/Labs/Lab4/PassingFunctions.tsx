// src/Labs/Lab4/PassingFunctions.tsx
interface PassingFunctionsProps {
  theFunction: () => void;
}

export default function PassingFunctions({ theFunction }: PassingFunctionsProps) {
  return (
    <div id="wd-passing-functions">
      <h2>Passing Functions</h2>
      <button 
        onClick={theFunction}
        className="btn btn-primary"
        id="wd-pass-function-click"
      >
        Invoke the Function
      </button>
      <hr/>
    </div>
  );
}