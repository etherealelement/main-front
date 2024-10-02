import { Flow } from "./flow";
import { ControlsLayout } from "@/features/map/_ui/controls/controls-layout";
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
