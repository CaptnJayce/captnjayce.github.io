<script>
    let activeTab = 'home';
    let collapsibleStates = {
        ergodash: false,
        witchway: false,
        tinosport: false,
        infinitecaves: false,
        algorithmvisualizer: false,
        parrythefloor: false
    };
</script>

<style>
    .box, .boxProj {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60%;
        height: 80%;
        border-radius: 5px;
        display: flex;
        background-color: #1A1C23;
        overflow-y: hidden;
    }

    .box {
        justify-content: center;
        text-align: center;
    }

    .boxProj {
        justify-content: left;
        text-align: left;
        padding-left: 20px;
    }

    .boxFooter {
        position: absolute;
        top: 88%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60%;
        height: 4%;
        display: flex;
        justify-content: left;
        justify-items: center;
        text-align: center;
        background-color: var(--dark-bg);
        border-top: 1px solid;
    }

    .tab-button {
        color: var(--white);
        background-color: var(--dark-bg);
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        cursor: pointer;
        border: 1px solid transparent;
        border-top: 0;
        border-bottom-width: 2px;
        position: relative;
        padding: 0px 10px 0px 10px;
    }

    .tab-button.selected {
        border: 1px solid var(--white);
        border-top: 0;
        border-bottom-color: var(--pink);
        top: -1px;
    }

    .left, .right {
        height: 100%;
    }

    .leftText, .rightText {
        display: grid;
        justify-items: left;
    }

    .rightText p {
        margin: 4px;
    }

    .left {
        padding-left: 20px;
        width: 23%;
    }

    .right {
        margin-top: 64px;
        width: 77%;
    }

    .leftProj {
        justify-content: left;
    }

    .indent {
        display: grid;
        justify-items: left;
        text-indent: 30px;
    }

    .description {
        font-size: 14px;
        padding: 0;
        margin: 0 4px 5px 0px;
        overflow: hidden;
    }

    .lineBreak {
        padding: 20px 20px 10px 0px;
    }

    .container {
        justify-content: left;
        display: flex;
        align-items: baseline;
    }

    .command {
        color: var(--pink);
        font-weight: bold;
    }

    .projects {
        width: 100%;
        overflow-y: scroll;
        padding-bottom: 50vh;
    }

    .links {
        color: var(--white);
        padding-left: 5px;
        text-decoration: none;
    }

    .links:hover {
        text-decoration: underline;
    }

    .projLinks {
        color: var(--red);
        font-size: 20px;
        font-weight: bold;
        text-decoration: none;
        line-height: 1.3;
        display: inline-block;
        vertical-align: baseline;
    }

    .projLinks:hover {
        text-decoration: underline;
        text-decoration-thickness: 2px;
    }

    .collapsible {
        background: none;
        border: none;
        color: var(--purple);
        font: inherit;
        cursor: pointer;
        padding: 0 0 0 20px;
        margin: 0;
        font-size: 20px;
        font-weight: bold;
    }
</style>

{#if activeTab === 'home'}
<div class="box"> 
    <div class="left">
        <div class="leftText">
            <p class="command">~ $ fastfetch</p>
            <pre style="color: var(--red); font-weight: bold;">
                <span style="color: var(--pink)">
    .
    / \
    /   \
    /\    \
    /       \
    /  </span>       \
    /    .-.    \
    /    |   |    \
    /   .'     '.   \
    /.-'          '-._\
                </pre>
        </div>
    </div>
    <div class="right">
        <div class="rightText">
            <p style="color:var(--red); font-weight: bold;">captn<span style="color: var(--white)">@</span>portfolio_website</p>
            <p><i class="nf nf-fa-gear"></i>  im Casey (he/him), a 22yo "software dev" from London</p>
            <p><i class="nf nf-oct-server"></i>  im currently focused on making a game called "Witch Way", set in my own universe</p>
            <p><i class="nf nf-cod-package"></i>  professionally, i have experience in full stack web and software engineering</p>
            <p><i class="nf nf-cod-terminal"></i>  other interests:</p>
            <div class="indent">
                <p>~ $ 3D printing</p>
                <p>~ $ writing</p>
                <p>~ & pixel art</p>
                <p>~ & video games</p>
            </div>
            <p><i class="nf nf-cod-window"></i>  currently using Arch/Hyprland</p>
        </div>
    </div>
</div>

{:else if activeTab === 'projects'}
<div class="boxProj"> 
    <div class="projects">
        <div class="container">
            <div class="leftProj">
                <p class="command">~ $ cat Projects.txt </p>
                <p>C = Complete, S = Stable, U = Unfinished</p>
            </div>
        </div>

        {#each Object.entries({
            parrythefloor: {
                link: "https://captnjayce.itch.io/parry-the-floor",
                label: "C| parry the floor",
                sublabel: "my first game development project, made in Godot across two to three months, i put together a simple platformer with the goal of 'parrying' off objects instead of avoiding them",
                content: [
                    "~ : the core of the game was heavily inspired by hollow knight's 'pogo' mechanic",
                    "~ : despite my fondness for Godot, i have found that i prefer using graphics libraries such as Raylib",
                    "~ : this project will be remade after Witch Way is completed"
                ]
            },
            tinosport: {
                link: "https://www.tinosport.co.uk/",
                label: "C| tino sport web page",
                sublabel: "rehauled the front-end of a shopify page as well as optimising back-end workflow",
                content: [
                    "~ : i communicated directly with the client to ensure UI designs, colors, fonts, etc, were all approved and consistent",
                    "~ : since i overtook the project from a previous dev, i learned a lot about what makes good, long-term, project structure",
                    "~ : a lot of back-end improvements had to be made, there were a lot of conflicting design decisions that either had to be reworked or completely scrapped"
                ]
            },
            algorithmvisualizer: {
                link: "https://github.com/CaptnJayce/algorithm-visualizser",
                label: "S| algorithm visualizser",
                sublabel: "this was a web project, made in HTML, CSS, and JS. it visualises sorting algorithms and provides code in JavaScript",
                content: [
                    "~ : i opted for a vanilla front-end stack to properly learn HTML, CSS, and JS",
                    "~ : whilst functional, it could certainly do with some polish and bug fixing"
                ]
            },
            infinitecaves: {
                link: "https://github.com/CaptnJayce/infinite-caves",
                label: "S| infinite-caves",
                sublabel: "a simple Unity project showcasing infinite cave generation",
                content: [
                    "~ : i decided to work on a small Unity project to fully explore most options gamedev offered",
                    "~ : i opted for perlin noise generation, as well as level-based rendering to both generate and handle all of the tiles"
                ]
            },
            witchway: {
                link: "https://github.com/CaptnJayce/witch-way",
                label: "U| witch way",
                sublabel: "my current long-term project, witch way is a game made in Odin & Raylib that aims to bring forth creative mechanics in a unique universe. its very early in development at the moment",
                content: [
                    "~ : developed with Odin and Raylib",
                    "~ : deriving inspiration from Stardew Valley, i wanted to make a more story and combat focused RPG with farming elements",
                    "the current gameplay loop:",
                    "~ : each day you will be given one of three task types, (combat, foraging, research), where you have to explore the area you reside in and fulfill certain parameters.",
                    "~ : this could involve finding X amount of a rare plant, or killing X amount of enemies in Y area.",
                    "~ : i dont want to overscope, so im also keeping skill trees and proficiencies limited for now, but they will exist in some capacity to allow the player to specialise."
                ]
            },
            ergodash: {
                link: "https://github.com/omkbd/ErgoDash",
                label: "U| ergodash kb",
                sublabel: "will be building the ergodash keyboard from scratch",
                content: [
                    "~ : still waiting for the parts to arrive"
                ]
            }
        }) as [key, project]}
        <div class="container">
            <div class="leftProj">
                <a href={project.link} class="projLinks"><span style="color: var(--blue)">{project.label.split('|')[0]}</span><span style="color: var(--white)">|</span> {project.label.split('|')[1]}</a>
            </div>
            <div class="leftProj">
                <button class="projLinks collapsible {collapsibleStates[key] ? 'active' : ''}" on:click={() => collapsibleStates[key] = !collapsibleStates[key]}>
                    read more
                </button>
            </div>
        </div>

        <p class="description">{project.sublabel}</p>

        <div class="container">
            <div class="description" style:display={collapsibleStates[key] ? 'block' : 'none'}>
                {#each project.content as paragraph}
                    <p class="description">{paragraph}</p>
                {/each}
            </div>
        </div>
        <div class="lineBreak"></div>
        {/each}
    </div>
</div>

{:else if activeTab === 'contact'}
<div class="box"> 
    <div class="left" style="width: 100%;">
        <div class="leftText">
            <p class="command">~ $ cat ContactInfo.txt</p>
        </div>

        <div class="rightText">
            <a href="https://github.com/CaptnJayce" class="links"><i class="nf nf-fa-github"></i> github</a>
            <a href="https://captnjayce.itch.io/" class="links"><i class="nf nf-fa-itch_io"></i> itch.io</a>
            <a href="https://www.linkedin.com/in/jc444/" class="links"><i class="nf nf-md-linkedin"></i> linkedin</a>
            <a href="mailto:captn.enquiries@protonmail.com" class="links"><i class="nf nf-md-email"></i> email</a>
            <a href="https://discord.com/users/775894736623239260" class="links"><i class="nf nf-fa-discord"></i> discord</a>
        </div>
    </div>
</div>
{/if}

<div class="boxFooter">
    <button 
        on:click={() => activeTab = 'home'} 
        class="tab-button"
        class:selected={activeTab === 'home'}
    >
        ~ : home 
    </button>
    <button 
        on:click={() => activeTab = 'projects'} 
        class="tab-button"
        class:selected={activeTab === 'projects'}
    >
        ~ : projects
    </button>
    <button 
        on:click={() => activeTab = 'contact'} 
        class="tab-button"
        class:selected={activeTab === 'contact'}
    >
        ~ : contact
    </button>
</div>
