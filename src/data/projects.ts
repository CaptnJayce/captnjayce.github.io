export interface Project {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  links?: { label: string; url: string }[]
}

export const projects: Project[] = [
  {
    slug: "lorem-1",
    title: "Lorem Ipsum Dolor",
    date: "2024 — present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags: ["C++", "Lua", "Raylib", "ECS"],
    links: [
      { label: "github", url: "https://github.com" },
    ],
  },
  {
    slug: "lorem-2",
    title: "Sit Amet Consectetur",
    date: "2023",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["Python", "CLI", "Automation"],
    links: [
      { label: "github", url: "https://github.com" },
    ],
  },
  {
    slug: "lorem-3",
    title: "Adipiscing Elit Sed",
    date: "2023 — 2024",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    tags: ["Python", "AI", "NLP", "Procedural"],
  },
  {
    slug: "lorem-4",
    title: "Do Eiusmod Tempor",
    date: "2022",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    tags: ["TypeScript", "Three.js", "WebGL"],
    links: [
      { label: "demo", url: "https://example.com" },
      { label: "github", url: "https://github.com" },
    ],
  },
  {
    slug: "lorem-5",
    title: "Incididunt Ut Labore",
    date: "2021 — 2022",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    tags: ["Python", "Linguistics", "Procedural"],
  },
]
