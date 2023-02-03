import { SyntheticEvent } from "react";

export default function StopPropagation() {
  const onDivClick = (e: SyntheticEvent) =>
    console.log("click envent buttles on <div>");
  const onButtonClick = (e: SyntheticEvent) => {
    console.log("mouse on click occurs on <button> and call stopPropagation");
    e.stopPropagation();
  };

  return (
    <div onClick={onDivClick}>
      <p>StopPropagation</p>
      <button onClick={onButtonClick}>
        Click Me and stop event propagation
      </button>
    </div>
  );
}
