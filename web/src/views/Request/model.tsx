export interface RequestModel {
  title: string;
  exchange: string;
  requiredSkill: string;
  urgency: string;
  location: string;
  details: string;
  // Contact Info
  phoneno: string;
  email?: string;
  facebook?: string;
  line?: string;
  note?: string;
}
