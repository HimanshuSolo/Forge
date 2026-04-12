export type DeploymentStatus =
  | "queued"
  | "building"
  | "uploading"
  | "live"
  | "failed";

export interface DeploymentJob {
  deploymentId: string;
  projectId: string;
  userId: string;
  repoUrl: string;
  buildCommand: string;
  outputDir: string;
}

export interface Project {
  id: string;
  name: string;
  slug: string;
  userId: string;
  createdAt: Date;
}

export interface Deployment {
  id: string;
  projectId: string;
  status: DeploymentStatus;
  deployedAt: Date | null;
  createdAt: Date;
}