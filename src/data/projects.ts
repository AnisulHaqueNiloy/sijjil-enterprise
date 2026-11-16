export interface Project {
  id: string;
  title: string;
  client: string;
  division: 'Electro-Mechanical' | 'Construction' | 'IT Solutions';
  year: string;
  location: string;
  scopeSummary: string;
  status: 'Completed' | 'Ongoing';
  tags: string[];
}

/**
 * Project repository.
 * When this array is empty, the Projects page renders the professional
 * "Our Portfolio Is Being Prepared" state. When items are added to this array,
 * the page automatically renders a filterable responsive grid of projects.
 *
 * NOTE: Per project guidelines, no fake project names or fake clients are added.
 */
export const PROJECTS_DATA: Project[] = [];
