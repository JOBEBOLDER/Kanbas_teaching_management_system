// src/Labs/Lab4/ChildStateComponent.tsx
interface ChildStateComponentProps {
    counter: number;
    setCounter: (counter: number) => void;
  }
  
  export default function ChildStateComponent({ 
    counter, 
    setCounter 
  }: ChildStateComponentProps) {
    return (
      <div id="wd-child-state">
        <h3>Counter: {counter}</h3>
        <button 
          onClick={() => setCounter(counter + 1)}
          className="btn btn-success me-2"
          id="wd-increment-child-state-click"
        >
          Increment
        </button>
        <button 
          onClick={() => setCounter(counter - 1)}
          className="btn btn-danger"
          id="wd-decrement-child-state-click"
        >
          Decrement
        </button>
        <hr/>
      </div>
    );
  }