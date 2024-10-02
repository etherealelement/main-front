import { Flow } from "./flow";
import { ControlsLayout } from "./actions/controls-layout";
import { ReactFlowProvider } from "@xyflow/react";
export function Map() {
  return (
    <ReactFlowProvider>
      <div className="grow relative">
        <Flow></Flow>
        <ControlsLayout
          actionsPanel={ability?.canMangeNodes() && <ActionsPanel />}
        ></ControlsLayout>
      </div>
    </ReactFlowProvider>
  );
}
