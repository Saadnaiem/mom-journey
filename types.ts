
export enum MilestoneId {
  PRE_PREGNANCY = 'pre_pregnancy',
  EARLY_PREGNANCY = 'early_pregnancy',
  LATE_PREGNANCY = 'late_pregnancy',
  POST_DELIVERY = 'post_delivery',
  INFANT_CARE = 'infant_care',
  TODDLER_CARE = 'toddler_care'
}

export interface Item {
  id: string;
  name: string;
  category: string;
  description: string;
}

export interface Milestone {
  id: MilestoneId;
  title: string;
  subtitle: string;
  description: string;
  expertTip: string;
  clinicalInsight: string;
  checklist: Item[];
  imageUrl: string;
}
