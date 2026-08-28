export interface UniverseOption {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  presetTargets: Array<{ id: string; title: string; year: number; type: string }>;
  totalNodes?: number;
}
