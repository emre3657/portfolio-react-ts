import { type ExperienceItem } from "../data/experience";

export const getRefDate = (item: ExperienceItem): Date => {
  const end = item.endTime ? new Date(item.endTime) : null;
  const start = new Date(item.startTime);
  return end ?? start;
};
