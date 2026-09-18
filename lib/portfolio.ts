export type Project = {
    index: string;
    name: string;
    category: string;
    description: string;
    result: string;
    stack: string[];
    accent: string;
};

export type Metric = {
    value: string;
    label: string;
};

export const portfolio = {
    name: "Abdug'ani Xolmatjonov",
    role: "Full-stack web developer",
    location: "Tashkent, Uzbekistan",
    availability: "Available weekdays, 08:00–18:00",
    email: "xolmatjonovabdugani@gmail.com",
    website: "https://abdugani.space",
    hero: "I turn ideas into useful web experiences.",
    intro: "Full-stack developer focused on building clear, reliable products from thoughtful interfaces to dependable systems.",
    bio: "I am a full-stack web developer based in Tashkent, building modern web experiences with a strong focus on clarity, performance, and maintainable code.",
    approach:
        "I like working across the whole product: understanding the problem, shaping the interface, and building the systems that make it dependable in use.",
    socials: [
        { label: "GitHub", href: "https://github.com/ABDUGANIrich" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/abdug%CA%BBani-xolmatjonov-4602b137/" },
        { label: "Website", href: "https://abdugani.space" },
    ],
    services: ["Frontend development", "Backend development", "API integration", "Responsive web experiences"],
    metrics: [
        { value: "Fullstack", label: "from interface to API" },
        { value: "FASSCO", label: "current experience" },
        { value: "Tashkent", label: "working from Uzbekistan" },
    ] satisfies Metric[],
    projects: [] as Project[],
    experience: [
        {
            period: "2025",
            role: "Frontend web developer",
            company: "FASSCO",
            detail: "Build and refine responsive web interfaces with attention to usability, visual consistency, and maintainable implementation.",
            achievement:
                "Contributed to delivering polished frontend experiences that connect product goals with everyday user needs.",
        },
    ],
} as const;
