import type { Contact, Profile } from "./types";

// ─── Edit your personal details here ────────────────────────────────────────

export const profile: Profile = {
  name: "Serny",
  title: "Developer / Student",
  tagline: "I build thoughtful software and playful interfaces.",
  bio: [
    "Hi, I'm Serny — a developer and student who enjoys turning ideas into " +
      "polished, interactive experiences. I care about clean architecture, " +
      "good design, and the small details that make software feel alive.",
    "This site is a work in progress: the plan is to turn it into a " +
      "game-like world you can explore. For now, here's the classic tour of " +
      "my projects, experience, and skills.",
  ],
  location: "Singapore",
  // avatar: "/avatar.jpg",
};

export const contact: Contact = {
  email: "sernyuanong@gmail.com",
  // resume: "/resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/serny-afk" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ],
};
