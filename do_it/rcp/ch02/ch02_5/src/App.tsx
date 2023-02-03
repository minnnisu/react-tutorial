import DispatchEvent from "./event/DispatchEvent";
import DragDrop from "./event/DragDrop";
import EventBubbling from "./event/EventBubbling";
import EventListener from "./event/EventListener";
import FileDrop from "./event/FileDrop";
import FileInput from "./event/FileInput";
import OnChange from "./event/OnChange";
import OnClick from "./event/OnClick";
import ReactOnClick from "./event/ReactOnClick";
import StopPropagation from "./event/StopPropagation";

function App() {
  return (
    <div>
      <FileDrop />
      {/* <DragDrop /> */}
      {/* <FileInput /> */}
      {/* <OnChange /> */}
      {/* <StopPropagation /> */}
      {/* <EventBubbling /> */}
      {/* <DispatchEvent /> */}
      {/* <ReactOnClick /> */}
      {/* <OnClick /> */}
      {/* <EventListener /> */}
    </div>
  );
}

export default App;
