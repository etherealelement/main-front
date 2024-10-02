import { Button } from "@/shared/ui/button";
import { ForwardedRef, forwardRef } from "react";

export const ActionButton = forwardRef(function ActionButton(
  {
    onClick,
    title,
    icon,
  }: {
    title: string;
    icon: React.ReactNode;
    onClick?: () => void;
  },
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <Button
      ref={ref}
      variant={"ghost"}
      size={"icon"}
      title={title}
      className="[&>svg]:w-5"
      onClick={onClick}
    >
      {icon}
    </Button>
  );
});
