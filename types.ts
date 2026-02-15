
export enum ProposalSection {
  EXECUTIVE_SUMMARY = 'Executive Summary',
  CORE_VALUE = 'Core Value',
  SYSTEM_ARCHITECTURE = 'System Architecture',
  HARDWARE_ISOLATION = 'Hardware Isolation',
  GROWTH_CURVE = 'Growth Curve',
  INFINITE_SCALABILITY = 'Infinite Scalability'
}

export interface RoadmapStep {
  title: string;
  description: string;
  status: 'pending' | 'processing' | 'complete';
}

export interface ChartData {
  day: number;
  productivity: number;
  efficiency: number;
}
