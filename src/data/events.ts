export type Event = {
    title: string;
    date: string; // ISO format: "2025-08-15"
    image: string;
    description?: string;
  };

export type Announcement = {
    title: string;
    date: string;
    description: string;
    endDate: string; // ISO format: "2025-08-15" - announcement will be hidden after this date
    priority?: 'high' | 'medium' | 'low';
  };
  
  export const events: Event[] = [
    {
      title: "Mid-Autumn Festival",
      date: "2025-09-21",
      image: "/assets/images/events/mid-autumn-2025.jpg",
      description: "Join us for a night of mooncakes, lanterns, and cultural performances to celebrate the Mid-Autumn Festival.",
    },
    {
      title: "Spring Banquet",
      date: "2025-04-12",
      image: "/assets/images/events/spring-banquet-2025.jpg",
    },
    {
      title: "Fall Kickoff",
      date: "2025-08-15",
      image: "/assets/images/events/fall-kickoff-2025.jpg",
    },
    {
      title: "Mid-Autumn Festival",
      date: "2025-09-21",
      image: "/assets/images/events/mid-autumn-2025.jpg",
      description: "Join us for a night of mooncakes, lanterns, and cultural performances to celebrate the Mid-Autumn Festival.",
    },
    {
      title: "Mid-Autumn Festival",
      date: "2025-09-21",
      image: "/assets/images/events/mid-autumn-2025.jpg",
      description: "Join us for a night of mooncakes, lanterns, and cultural performances to celebrate the Mid-Autumn Festival.",
    },
    {
      title: "Mid-Autumn Festival",
      date: "2025-09-21",
      image: "/assets/images/events/mid-autumn-2025.jpg",
      description: "Join us for a night of mooncakes, lanterns, and cultural performances to celebrate the Mid-Autumn Festival.",
    },
    {
      title: "Spring Banquet",
      date: "2025-04-12",
      image: "/assets/images/events/spring-banquet-2025.jpg",
    },
    {
      title: "Spring Banquet",
      date: "2025-04-12",
      image: "/assets/images/events/spring-banquet-2025.jpg",
    },
    {
      title: "Spring Banquet",
      date: "2025-04-12",
      image: "/assets/images/events/spring-banquet-2025.jpg",
    },
    {
      title: "Spring Banquet",
      date: "2025-04-12",
      image: "/assets/images/events/spring-banquet-2025.jpg",
    },
    {
      title: "Spring Banquet",
      date: "2025-04-12",
      image: "/assets/images/events/spring-banquet-2025.jpg",
    },
    {
      title: "Spring Banquet",
      date: "2025-04-12",
      image: "/assets/images/events/spring-banquet-2025.jpg",
    },
    {
      title: "Spring Banquet",
      date: "2025-04-12",
      image: "/assets/images/events/spring-banquet-2025.jpg",
    },
    {
      title: "Spring Banquet",
      date: "2025-04-12",
      image: "/assets/images/events/spring-banquet-2025.jpg",
    },
    {
      title: "Spring Banquet",
      date: "2025-04-12",
      image: "/assets/images/events/spring-banquet-2025.jpg",
    },
    {
      title: "Spring Banquet",
      date: "2025-04-12",
      image: "/assets/images/events/spring-banquet-2025.jpg",
    },
    {
      title: "Spring Banquet",
      date: "2025-04-12",
      image: "/assets/images/events/spring-banquet-2025.jpg",
    },
  ];

  // Customizable announcements - automatically hidden when endDate has passed
  export const announcements: Announcement[] = [
    {
      title: "Lunar New Year Banquet 2025",
      date: "2025-02-15",
      description: "Our biggest event of the year! Join us for an evening of traditional performances, delicious food, and cultural celebration.",
      endDate: "2025-02-15", // Will be hidden after the event date
      priority: "high"
    },
    {
      title: "Spring Recruitment Drive",
      date: "2025-01-20",
      description: "Looking for new officers and family members! Applications open now for Spring 2025 positions.",
      endDate: "2025-09-01", // Will be hidden after applications close
      priority: "medium"
    },
    {
      title: "Cultural Workshop Series",
      date: "2025-01-01",
      description: "Learn traditional Chinese calligraphy, tea ceremony, and more in our weekly workshop series.",
      endDate: "2025-12-31", // This announcement has already expired
      priority: "low"
    },
    {
      title: "Lunar New Year Banquet 2025",
      date: "2025-02-15",
      description: "Our biggest event of the year! Join us for an evening of traditional performances, delicious food, and cultural celebration.",
      endDate: "2025-02-15",
      priority: "high"
    }
  ];