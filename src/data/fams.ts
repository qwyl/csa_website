export type Fam = {
    title: string;
    image: string;
    famHeads: string[];
    description?: string;
  };
  
  export const fams: Fam[] = [
    {
        title: "Peanuts Fam",
        image: "/assets/images/fams/peanuts-fam.jpg",
        famHeads: ["Ren", "Andrew"],
        description: "Join the Peanuts Fam for a fun and friendly community that loves to share laughs and good times together!"
    },
    {
        title: "Dragon Fam",
        image: "/assets/images/fams/dragon-fam.jpg",
        famHeads: ["Sarah", "Michael"],
        description: "The Dragon Fam brings energy and excitement to every event. Perfect for those who love adventure and cultural activities!"
    },
    {
        title: "Phoenix Fam",
        image: "/assets/images/fams/phoenix-fam.jpg",
        famHeads: ["Emma", "David"],
        description: "Rise with the Phoenix Fam! We focus on personal growth, leadership development, and building lasting friendships."
    }
  ];