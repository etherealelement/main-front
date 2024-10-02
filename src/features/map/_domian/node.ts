export type CourseId = string;
export type NodeId = string;
export type EdgeId = string;

export type NodePosition = {
  x: number;
  y: number;
  zIndex?: number;
};

export type NodeDimensions = {
  width: number; // px
  height: number; // px
  rotation: number; // deg
  scale: number;
};

export type NodeSettings = {
  hidden: boolean;
};

export type CourseNodeData = {
  courseId: CourseId;
};

export type ImageNodeData = {
  src: string;
};

export type CourseNodeEntity = {
  id: NodeId;
  type: "course";
  data: CourseNodeData;
  position: NodePosition;
  dimensions: NodeDimensions;
  settings: NodeSettings;
};

export type ImageNodeEntity = {
  id: NodeId;
  type: "image";
  data: ImageNodeData;
  position: NodePosition;
  dimensions: NodeDimensions;
  settings: NodeSettings;
};

export type NodeEntity = CourseNodeEntity | ImageNodeEntity;

export type NodeType = NodeEntity["type"];

export type EdgeEntity = {
  id: string;
  source: NodeId;
  target: NodeId;
};

export const MAP_NODE_TYPES = {
  COURSE: "course" satisfies NodeType,
  IMAGE: "image" satisfies NodeType,
} as const;
