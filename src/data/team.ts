export type TeamMember = {
  id: string;
  name: string;
  position: string;
  department: string;
  term: string;
  image: string;
  year?: string;
  major?: string;
  email?: string;
  bio?: string;
  isActive: boolean;
  orderIndex?: number;
  createdAt: string;
  updatedAt: string;
};

export const teamMembers: TeamMember[] = [
  // Judicial Chair
  {
    id: "judicial-001",
    name: "Sarah Chen",
    position: "Judicial Chair",
    department: "Judicial Chair",
    term: "Spring 2025",
    image: "/assets/images/team/judicial-chair.jpg",
    year: "Class of 2025",
    major: "Political Science",
    email: "judicial@csaberkeley.edu",
    bio: "Ensuring fair governance and upholding CSA's values and bylaws.",
    isActive: true,
    orderIndex: 1,
    createdAt: "2024-12-01",
    updatedAt: "2024-12-01"
  },

  // Executives
  {
    id: "exec-001",
    name: "Michael Zhang",
    position: "President",
    department: "Executives",
    term: "Spring 2025",
    image: "/assets/images/team/president.jpg",
    year: "Class of 2025",
    major: "Computer Science",
    email: "president@csaberkeley.edu",
    bio: "Leading CSA's mission to celebrate Chinese culture and build community.",
    isActive: true,
    orderIndex: 1,
    createdAt: "2024-12-01",
    updatedAt: "2024-12-01"
  },
  {
    id: "exec-002",
    name: "Emma Wang",
    position: "Vice President",
    department: "Executives",
    term: "Spring 2025",
    image: "/assets/images/team/vice-president.jpg",
    year: "Class of 2025",
    major: "Business Administration",
    email: "vicepresident@csaberkeley.edu",
    bio: "Supporting CSA's growth and fostering meaningful connections.",
    isActive: true,
    orderIndex: 2,
    createdAt: "2024-12-01",
    updatedAt: "2024-12-01"
  },
  {
    id: "exec-003",
    name: "David Liu",
    position: "Secretary",
    department: "Executives",
    term: "Spring 2025",
    image: "/assets/images/team/secretary.jpg",
    year: "Class of 2026",
    major: "Economics",
    email: "secretary@csaberkeley.edu",
    bio: "Keeping our community organized and connected.",
    isActive: true,
    orderIndex: 3,
    createdAt: "2024-12-01",
    updatedAt: "2024-12-01"
  },

  // Media
  {
    id: "media-001",
    name: "Jessica Kim",
    position: "Media Director",
    department: "Media",
    term: "Spring 2025",
    image: "/assets/images/team/media-director.jpg",
    year: "Class of 2025",
    major: "Film & Media Studies",
    email: "media@csaberkeley.edu",
    bio: "Capturing and sharing CSA's most memorable moments.",
    isActive: true,
    orderIndex: 1,
    createdAt: "2024-12-01",
    updatedAt: "2024-12-01"
  },
  {
    id: "media-002",
    name: "Alex Chen",
    position: "Photographer",
    department: "Media",
    term: "Spring 2025",
    image: "/assets/images/team/photographer.jpg",
    year: "Class of 2026",
    major: "Art Practice",
    email: "photographer@csaberkeley.edu",
    bio: "Creating visual stories that showcase our community.",
    isActive: true,
    orderIndex: 2,
    createdAt: "2024-12-01",
    updatedAt: "2024-12-01"
  },

  // PR & Design
  {
    id: "pr-001",
    name: "Sophie Wu",
    position: "PR Director",
    department: "PR & Design",
    term: "Spring 2025",
    image: "/assets/images/team/pr-director.jpg",
    year: "Class of 2025",
    major: "Design",
    email: "pr@csaberkeley.edu",
    bio: "Crafting CSA's visual identity and public presence.",
    isActive: true,
    orderIndex: 1,
    createdAt: "2024-12-01",
    updatedAt: "2024-12-01"
  },
  {
    id: "pr-002",
    name: "Kevin Zhao",
    position: "Graphic Designer",
    department: "PR & Design",
    term: "Spring 2025",
    image: "/assets/images/team/graphic-designer.jpg",
    year: "Class of 2026",
    major: "Architecture",
    email: "design@csaberkeley.edu",
    bio: "Bringing creativity and innovation to CSA's visual communications.",
    isActive: true,
    orderIndex: 2,
    createdAt: "2024-12-01",
    updatedAt: "2024-12-01"
  },

  // Events
  {
    id: "events-001",
    name: "Rachel Lin",
    position: "Events Director",
    department: "Events",
    term: "Spring 2025",
    image: "/assets/images/team/events-director.jpg",
    year: "Class of 2025",
    major: "Event Management",
    email: "events@csaberkeley.edu",
    bio: "Creating unforgettable experiences that bring our community together.",
    isActive: true,
    orderIndex: 1,
    createdAt: "2024-12-01",
    updatedAt: "2024-12-01"
  },
  {
    id: "events-002",
    name: "Tommy Huang",
    position: "Event Coordinator",
    department: "Events",
    term: "Spring 2025",
    image: "/assets/images/team/event-coordinator.jpg",
    year: "Class of 2026",
    major: "Business Administration",
    email: "coordinator@csaberkeley.edu",
    bio: "Ensuring every event runs smoothly and everyone has a great time.",
    isActive: true,
    orderIndex: 2,
    createdAt: "2024-12-01",
    updatedAt: "2024-12-01"
  },

  // Finance
  {
    id: "finance-001",
    name: "Lisa Park",
    position: "Finance Director",
    department: "Finance",
    term: "Spring 2025",
    image: "/assets/images/team/finance-director.jpg",
    year: "Class of 2025",
    major: "Economics",
    email: "finance@csaberkeley.edu",
    bio: "Managing CSA's financial health and ensuring sustainable growth.",
    isActive: true,
    orderIndex: 1,
    createdAt: "2024-12-01",
    updatedAt: "2024-12-01"
  },
  {
    id: "finance-002",
    name: "Ryan Tan",
    position: "Budget Manager",
    department: "Finance",
    term: "Spring 2025",
    image: "/assets/images/team/budget-manager.jpg",
    year: "Class of 2026",
    major: "Mathematics",
    email: "budget@csaberkeley.edu",
    bio: "Keeping track of every detail to maximize our impact.",
    isActive: true,
    orderIndex: 2,
    createdAt: "2024-12-01",
    updatedAt: "2024-12-01"
  }
];

// Department configurations
export const departments = [
  {
    name: "Judicial Chair",
    description: "Ensuring fair governance and upholding CSA's values",
    color: "#AF383C"
  },
  {
    name: "Executives",
    description: "Leading CSA's mission and vision",
    color: "#8f2f33"
  },
  {
    name: "Media",
    description: "Capturing and sharing CSA's moments",
    color: "#AF383C"
  },
  {
    name: "PR & Design",
    description: "Crafting CSA's visual identity and public presence",
    color: "#8f2f33"
  },
  {
    name: "Events",
    description: "Creating unforgettable community experiences",
    color: "#AF383C"
  },
  {
    name: "Finance",
    description: "Managing CSA's financial health and growth",
    color: "#8f2f33"
  }
]; 