<script>
    let activeTab = 'completed_projects';
 	import algo from '$lib/images/algo.png';   
 	import ptf1 from '$lib/images/ptf1.png';   
</script>

<style>
    .box {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60%;
        height: 80%;
        border-radius: 5px;
        display: flex;
        justify-content: left;
        justify-items: left;
        text-align: left;
        background-color: var(--kde-bg);
    }
    .boxFooter {
        margin: 0;
        position: absolute;
        top: 88%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60%;
        height: 4%;
        border-radius: 5px;
        display: flex;
        justify-content: left;
        justify-items: center;
        text-align: center;
        background-color: var(--kde-bg);
    }

    .terminal {
        width: 100%;
        padding-left: 20px;
        overflow-y: scroll;

        padding-bottom: 50vh;
    }

    .buttons {
        color: var(--white);
        background-color: black;
        border-width: 0px;

        border-right-color: gray;
        border-right-width: 2px;

        border-top-color: var(--white);
        border-top-width: 2px;

        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        cursor: pointer;
    }

    .links {
        font-size: 20px;
        font-weight: bold;
        color: var(--white);
    }
    .links:hover {
        color: var(--arch-blue);
    }

    .description {
        font-size: 14px;
        padding: 0;
        margin: 0 4px 5px 0px;
    }

    .lineBreak {
        padding: 20px 20px 40px 0px;
    }
</style>

<div class="box"> 
    <div class="terminal">
        {#if activeTab === 'completed_projects'}
            <p> ~ $ completed projects </p>
            <a href="https://github.com/CaptnJayce/algorithm-visualizser" class="links"><i class="nf nf-fa-arrow_right"></i> algorithm visualizser</a>
            <p class="description">this was a web project, made in HTML, CSS, and JS. it visualises sorting algorithms and provides code in JavaScript</p>
            <p class="description">~ : i will be improving it soon, fixing bugs + redesigning it</p>
            <img src="{algo}" alt="algo_vis" width=932px height=409px>

            <div class="lineBreak">
                <hr>
            </div>

            <a href="https://captnjayce.itch.io/parry-the-floor" class="links"><i class="nf nf-fa-arrow_right"></i> parry the floor</a>
            <p class="description">my first game development project, made in Godot across two to three months, i put together a simple platformer with the goal of 'parrying' off objects instead of avoiding them</p>
            <p class="description">~ : the core of the game was heavily inspired by hollow knight's 'pogo' mechanic</p>
            <p class="description">~ : it taught me a lot, but looking back on it there's a lot of things i'd do differently</p>
            <img src="{ptf1}" alt="parry_the_floor" width=681px height=367px>

            <div class="lineBreak">
                <hr>
            </div>

            <a href="https://www.tinosport.co.uk/" class="links"><i class="nf nf-fa-arrow_right"></i> tino sport web page</a>
            <p class="description">tasked with rehauling the front-end of a shopify page as well as optimising back-end workflow</p>

        {:else if activeTab === 'work_in_progress'}
            <p> ~ $ work in progress projects </p>
            <a href="https://github.com/CaptnJayce/captnjayce.github.io" class="links"><i class="nf nf-fa-arrow_right"></i> this website</a>
            <p class="description">made in svelte, i created this site to showcase what i've done and what i'm doing. i also plan to host web games and maybe a blog in the future</p>

            <div class="lineBreak">
                <hr>
            </div>

            <a href="https://github.com/CaptnJayce/witch-way" class="links"><i class="nf nf-fa-arrow_right"></i> witch way</a>
            <p class="description">my current long-term project, witch way is a game made in Odin & Raylib that aims to bring forth creative mechanics in a unique universe. its very early in development at the moment</p>

            <div class="lineBreak">
                <hr>
            </div>

            <a href="https://github.com/omkbd/ErgoDash" class="links"><i class="nf nf-fa-arrow_right"></i> ergodash</a>
            <p class="description">im currently sourcing parts to make my own custom split keyboard, i will likely make an ErgoDash, or something similar</p>
        {/if}
    </div>
</div>
<div class="boxFooter">
    <button on:click={() => activeTab='completed_projects'} class="buttons">~ : completed_projects</button>
    <button on:click={() => activeTab='work_in_progress'} class="buttons">~ : work_in_progress</button>
</div>