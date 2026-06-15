export interface Project {
    slug: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
    team: "solo" | "group";
    repo?: string;
    demo?: string;
}

export const projects: Project[] = [
    {
        slug: "euthymia",
        title: "euthymia",
        date: "2026 — present",
        description:
            "A game logic laboratory and simulation engine built with C++ and Lua. Designed for rapid prototyping of game mechanics - entity systems, tick-based simulation, and procedural behaviour - with hot-reloadable scripting via an embedded Lua VM.",
        tags: ["C++", "Lua", "Raylib", "ECS"],
        team: "solo",
        repo: "https://github.com/captnjayce/euthymia",
    },
    {
        slug: "tower-of-tomes",
        title: "tower-of-tomes",
        date: "2026",
        description:
            "A Witch Hat Atelier inspired magic encyclopedia and spell simulator. Recreates the dynamic creation of spells from the manga and allows users to build, visualise, and share their creations in a hosted 'Tower of Tomes'.",
        tags: ["React", "Three.js", "Reactflow", "Zustand"],
        team: "solo",
        repo: "https://github.com/captnjayce/tower-of-tomes",
        demo: "https://tower-of-tomes.netlify.app/",
    },
    {
        slug: "captns-games",
        title: "captns-games",
        date: "2026",
        description:
            "A portfolio and distribution hub for games published by me and my friends. I'll publish my own game demos here as well as itch.io - if you want to see super early prototypes and pre-production concepts, check it out!",
        tags: ["React", "TypeScript", "Vite"],
        team: "solo",
        repo: "https://github.com/captnjayce/captns-games",
        demo: "https://captns.games/",
    },
    {
        slug: "perpetua",
        title: "perpetua",
        date: "2026",
        description:
            "An idle game set on the planet Perpetua. The first canonical story from Asl - my fantasy universe. Built with React and Zustand for state management.",
        tags: ["React", "TypeScript", "Zustand"],
        team: "solo",
        repo: "https://github.com/captnjayce/perpetua",
        demo: "https://perpetua-game.netlify.app/",
    },
    {
        slug: "local-legal",
        title: "local-legal",
        date: "2026",
        description:
            "An LLM council that debates your ideas. Three agents - Critic, Appraiser, and Judge. They argue a given idea across multiple rounds, score it, and produce a refined version. Runs locally via Ollama or cloud providers.",
        tags: ["Python", "FastAPI", "React", "LiteLLM"],
        team: "solo",
        repo: "https://github.com/captnjayce/local-legal",
    },
    {
        slug: "halaqah",
        title: "halaqah",
        date: "2026",
        description:
            "An online Quran circle - multiplayer, turn-based Quran reading in real time, ayah by ayah. Built during a hackathon with a team of two devs and three testers. Uses the Quran Foundation API for content and Supabase for real-time session management.",
        tags: ["React", "TypeScript", "Supabase", "Tailwind"],
        team: "group",
        repo: "https://github.com/captnjayce/quran-hackathon",
        demo: "https://halaqah-circle.netlify.app/",
    },
];
