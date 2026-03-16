import type { ReactNode } from "react";

import * as recActions from "./rec-actions";
import * as zdMessenger from "./zd-messenger";
import * as legacyFreeze from "./legacy-freeze";
import * as legacyQuiz from "./legacy-quiz";
import * as legacySti from "./legacy-sti";
import * as ubiOasis from "./ubi-oasis";
import * as ubiPortfolio from "./ubi-portfolio";

export interface ProjectMeta {
  title: string;
  kicker: string;
  description: string;
  intro: ReactNode;
  navLabel?: string;
  heroImage?: string;
}

export interface ProjectModule {
  metadata: ProjectMeta;
  Content: () => ReactNode;
}

export const projects: Record<string, ProjectModule> = {
  "rec-actions": recActions,
  "zd-messenger": zdMessenger,
  "legacy-freeze": legacyFreeze,
  "legacy-quiz": legacyQuiz,
  "legacy-sti": legacySti,
  "ubi-oasis": ubiOasis,
  "ubi-portfolio": ubiPortfolio,
};

export const slugs = Object.keys(projects);
