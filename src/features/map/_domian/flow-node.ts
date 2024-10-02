import { MapDto } from "@/shared/api";
import type { Edge, Node } from "@xyflow/react";

export type FlowCourseNodeData = {
  course: MapDto.CourseMapNodeDataDto;
  settings: MapDto.MapNodeSettingsDto;
  dimensions: MapDto.MapNodeDimensionsDto;
};

export type FlowImageNodeData = {
  image: MapDto.ImageMapNodeDataDto;
  settings: MapDto.MapNodeSettingsDto;
  dimensions: MapDto.MapNodeDimensionsDto;
};

export const FlowNodeType = {
  COURSE: "course",
  IMAGE: "image",
} as const;
export type FlowNodeType = (typeof FlowNodeType)[keyof typeof FlowNodeType];

export type FlowCourseNode = Node<FlowCourseNodeData, "course">;
export type FlowImageNode = Node<FlowImageNodeData, "image">;

export type FlowNode = FlowCourseNode | FlowImageNode;
export type FlowEdge = Edge;
