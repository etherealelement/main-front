import { Flow } from "./flow";
import { ControlsLayout } from "@/features/map/_ui/controls/controls-layout";
import { ReactFlowProvider } from "@xyflow/react";
import { ActionsPanel } from "./controls/actions-panel";
export function Map() {
  return (
    <ReactFlowProvider>
      <div className="grow relative">
        <Flow></Flow>
        <ControlsLayout actionsPanel={<ActionsPanel />}></ControlsLayout>
      </div>
    </ReactFlowProvider>
  );
}
