import { BasePlanet } from './planet.js';
import {typeEffect, typeAsciiEffect} from "../../systems/globals";

export class TimberHearth extends BasePlanet {
    constructor(camera) {
        super(camera, "Projects", 6, 1.25, 0x59981a, 0);

        this.semiMajorAxis = 30;
        this.semiMinorAxis = 20;
        this.orbitSpeed = 0.5;
        this.angle = Math.random() * Math.PI * 2;

        this.projects = [
            {
                title: "This Website",
                desc: "A portfolio website, inspired by Outer Wilds, made in ThreeJS",
                tech: ["ThreeJS", "HTML", "CSS"],
                status: "Incomplete",
                img: "/assets/portfolio.png",
                link: "https://github.com/CaptnJayce/captnjayce.github.io"
            },
            {
                title: "Parry The Floor Demo",
                desc: "A simple three level platformer, focused around hitting obstacles to navigate levels",
                tech: ["Godot", "GDScript"],
                status: "Complete",
                img: "/assets/parrythefloor.png",
                link: "https://captnjayce.itch.io/parry-the-floor"
            },
            {
                title: "Witch Way",
                desc: "My current long term game-dev project",
                tech: ["Odin", "Raylib"],
                status: "Incomplete",
                img: "/assets/witchway.png",
                link: "https://github.com/CaptnJayce/witch-way"
            },
            {
                title: "Algorithm Visualizser",
                desc: "An HTML website that visualises various algorithms",
                tech: ["JS", "HTML", "CSS"],
                status: "Complete",
                img: "/assets/algovis.png",
                link: "https://github.com/CaptnJayce/algorithm-visualizser"
            },
            {
                title: "Infinite Caves",
                desc: "Using Perlin Noise and seeded generation to generate infinite 2D caves",
                tech: ["Unity", "C#"],
                status: "Complete",
                img: "",
                link: "https://github.com/CaptnJayce/infinite-caves"
            },
            {
                title: "Quartermaster",
                desc: "An AI desktop assistant capable of web scraping, TTS, and STT",
                tech: ["Python", "Ollama"],
                status: "Incomplete",
                img: "",
                link: "https://github.com/CaptnJayce/quartermaster"
            },
            {
                title: "Falling Sand",
                desc: "A falling sand simulation",
                tech: ["C++", "Raylib"],
                status: "Complete",
                img: "",
                link: "https://github.com/CaptnJayce/falling-sand"
            },
            {
                title: "20 Games Challenge",
                desc: "A forever incomplete project documenting my attempt at the 20 Games Challenge by SDG Games",
                tech: ["C++", "Raylib"],
                status: "Incomplete",
                img: "",
                link: "https://github.com/CaptnJayce/20-games-challenge"
            },
            {
                title: "Tino Sport Webpage",
                desc: "A full-stack website developed on Shopify (design choices are at the liberty of the store owner..)",
                tech: ["Shopify", "JavaScript"],
                status: "Complete",
                img: "",
                link: "https://www.tinosport.co.uk/"
            },
            {
                title: "Ergodash",
                desc: "A custom built keyboard",
                tech: ["Ergodash Kit", "Soldering Kit"],
                status: "Complete",
                img: "/assets/ergodash.png",
                link: "https://github.com/omkbd/ErgoDash"
            }
        ];
    }

    // we're doing this da looooooooooooooooooooong way
    showPlanetInfo() {
        const overlay = document.getElementById('projectsOverlay');
        const main = overlay.querySelector('.projectsTitle')
        const incompleteList = overlay.querySelector('.incompleteProjects');
        const completeList = overlay.querySelector('.completeProjects');

        main.innerHTML = `
        <pre class="projectsAscii"></pre> 
        `;
        const projects = main.querySelector('pre') ;

        incompleteList.innerHTML = '';
        completeList.innerHTML = '';

        const ascii = `
██████╗ ██████╗   ██████╗      ██╗ ███████╗ ██████╗████████╗███████╗
██╔══██╗██╔══██╗ ██╔═══██╗     ██║ ██╔════╝██╔════╝╚══██╔══╝██╔════╝
██████╔╝██████╔╝ ██║   ██║     ██║ █████╗  ██║        ██║   ███████╗
██╔═══╝ ██╔══██╗ ██║   ██║ ██╗ ██║ ██╔══╝  ██║        ██║   ╚════██║
██║     ██║  ██║ ╚██████╔╝ ╚████╔╝ ███████╗╚██████╗   ██║   ███████║
╚═╝     ╚═╝  ╚═╝  ╚═════╝   ╚═══╝  ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝
        `
        typeAsciiEffect(projects, ascii, 100);

        this.projects.forEach(project => {
            const projectCard = this.createProjectCard(project);

            if (project.status === 'Complete') {
                completeList.appendChild(projectCard);
            } else {
                incompleteList.appendChild(projectCard);
            }
        });

        overlay.classList.add('visible');
    }

    createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'projectCard';

        card.innerHTML = `
        <h3>${project.title || 'Untitled Project'}</h3>

        ${project.desc ? `<p>${project.desc}</p>` : ''}

        <div class="tags"> ${(project.tech || []).map(tech => `<span class="tag">${tech}</span>`).join('')} </div>

        ${project.img ? `<img src="${project.img}" alt="${project.title || 'Project'}" class="projectImage">` : ''}
        ${project.link ? `<a href="${project.link}" class="link" target="_blank">View project</a>` : ''}`;

        return card;
    }

    update() {
        this.angle += 0.0009 * this.orbitSpeed;
        this.position.x = Math.cos(this.angle) * this.semiMajorAxis;
        this.position.y = Math.sin(this.angle) * this.semiMinorAxis;
    }
}
