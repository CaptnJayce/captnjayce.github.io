<script>
    let activeTab = 'home';
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
        justify-items: left;
        text-align: left;
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
        width: 50%;
        padding-left: 20px;
        padding-right: 20px;
    }
    .rightProj {
        justify-content: right;
        width: 50%;
        padding-left: 20px;
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
    }

    .lineBreak {
        padding: 20px 20px 40px 0px;
    }
    
    .container {
        justify-content: center;
        display: flex;
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
        text-decoration: none;
        padding-left: 5px;
    }
    .links:hover {
        text-decoration: underline;
    }
    .projLinks {
        color: var(--red);
        font-size: 20px;
        font-weight: bold;
        text-decoration: none;
    }
    .projLinks:hover {
        text-decoration: underline;
    }
</style>

{#if activeTab==='home'}
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
{:else if activeTab==='projects'}
<div class="boxProj"> 
    <div class="projects">
        <div class="container">
            <div class="leftProj">
                <p class="command">~ $ cat CompletedProjects.txt </p>
            </div>
            <div class="rightProj">
                <p class="command">~ $ cat WorkInProgress.txt </p>
            </div>
        </div>
        <div class="container">
            <div class="leftProj">
                <a href="https://github.com/CaptnJayce/algorithm-visualizser" class="projLinks"><i class="nf nf-fa-arrow_right"></i> algorithm visualizser</a>
                <p class="description">this was a web project, made in HTML, CSS, and JS. it visualises sorting algorithms and provides code in JavaScript</p>
                <p class="description">~ : i will be improving it soon, fixing bugs + redesigning it</p>
            </div>

            <div class="rightProj">
                <a href="https://github.com/CaptnJayce/captnjayce.github.io" class="projLinks"><i class="nf nf-fa-arrow_right"></i> this website</a>
                <p class="description">made in svelte, i created this site to showcase what i've done and what i'm doing. i also plan to host web games and maybe a blog in the future</p>
            </div>
        </div>

        <div class="lineBreak">
        </div>

        <div class="container">
            <div class="leftProj">
                <a href="https://captnjayce.itch.io/parry-the-floor" class="projLinks"><i class="nf nf-fa-arrow_right"></i> parry the floor</a>
                <p class="description">my first game development project, made in Godot across two to three months, i put together a simple platformer with the goal of 'parrying' off objects instead of avoiding them</p>
                <p class="description">~ : the core of the game was heavily inspired by hollow knight's 'pogo' mechanic</p>
                <p class="description">~ : it taught me a lot, but looking back on it there's a lot of things i'd do differently</p>
            </div>

            <div class="rightProj">
                <a href="https://github.com/CaptnJayce/witch-way" class="projLinks"><i class="nf nf-fa-arrow_right"></i> witch way</a>
                <p class="description">my current long-term project, witch way is a game made in Odin & Raylib that aims to bring forth creative mechanics in a unique universe. its very early in development at the moment</p>
            </div>
        </div>

        <div class="lineBreak">
        </div>

        <div class="container">
            <div class="leftProj">
                <a href="https://www.tinosport.co.uk/" class="projLinks"><i class="nf nf-fa-arrow_right"></i> tino sport web page</a>
                <p class="description">tasked with rehauling the front-end of a shopify page as well as optimising back-end workflow</p>
            </div>

            <div class="rightProj">
            </div>
        </div>
    </div>
</div>
{:else if activeTab==='projLinks'}
<div></div>
{:else if activeTab==='contact'}
<div class="box"> 
    <div class="left" style="width: 100%;">
        <div class="leftText">
            <p class="command">~ $ cat ContactInfo.txt</p>
        </div>

        <div class="rightText">
            <p style="color:var(--red); font-weight: bold;">captn<span style="color: var(--white)">@</span>portfolio_website</p>
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
    <button 
        on:click={() => activeTab = 'links'} 
        class="tab-button"
        class:selected={activeTab === 'links'}
    >
        ~ : links
    </button>
</div>