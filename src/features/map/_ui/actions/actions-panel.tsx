import { FilePlus, ImagePlus } from "lucide-react";
import { ActionButton } from "./action-button";

export const ActionsPanel = () => {
  return (
    <div className="flex flex-col gap-1">
      <ActionButton icon={<ImagePlus></ImagePlus>}>Add image</ActionButton>
      <ActionButton icon={<FilePlus></FilePlus>}>Add course</ActionButton>
    </div>
  );
};
