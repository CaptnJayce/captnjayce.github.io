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
        width: 80%;
        height: 80%;
        border-radius: 5px;
        display: flex;
        justify-content: left;
        justify-items: left;
        text-align: left;
        background-color: #1A1C23;
    }

    .boxFooter {
        position: absolute;
        top: 88%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        height: 4%;
        display: flex;
        justify-content: left;
        justify-items: center;
        text-align: center;
        background-color: #2E303E;
        z-index: 1;

        border-top: 1px solid;
    }

    .terminal {
        width: 100%;
        padding-left: 20px;
        overflow-y: scroll;

        padding-bottom: 50vh;
    }

    .tab-button {
        color: var(--white);
        background-color: #2E303E;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        cursor: pointer;

        border-width: 1px;
        border-bottom-width: 2px;
        border-top-width: 0px;

        border-bottom-color: transparent;
        border-right-color: transparent;
        border-left-color: transparent;

        position: relative;
    }

    .tab-button.selected {
        border-width: 1px;

        border-top-width: 0px;
        border-top-color: transparent;

        border-color: var(--white);
        border-bottom-color: var(--link-blue);

        background-color: #2E303E;

        top: -1px;
    }

    .links {
        color: var(--red);
        font-size: 20px;
        font-weight: bold;
        text-decoration: none;
    }
    .links:hover {
        text-decoration: underline;
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
    .left {
        justify-content: left;
        width: 50%;
    }
    .right {
        justify-content: right;
        width: 50%;
    }
</style>


<div class="box"> 
    <div class="terminal">
        {#if activeTab === 'completed_projects'}
            <p class="command"> ~ $ completed projects </p>

            <div class="container">
                <div class="left">
                    <a href="https://github.com/CaptnJayce/algorithm-visualizser" class="links"><i class="nf nf-fa-arrow_right"></i> algorithm visualizser</a>
                    <p class="description">this was a web project, made in HTML, CSS, and JS. it visualises sorting algorithms and provides code in JavaScript</p>
                    <p class="description">~ : i will be improving it soon, fixing bugs + redesigning it</p>
                </div>

                <div class="right">
                </div>
            </div>

            <div class="lineBreak">
                <hr>
            </div>

            <div class="container">
                <div class="left">
                    <a href="https://captnjayce.itch.io/parry-the-floor" class="links"><i class="nf nf-fa-arrow_right"></i> parry the floor</a>
                    <p class="description">my first game development project, made in Godot across two to three months, i put together a simple platformer with the goal of 'parrying' off objects instead of avoiding them</p>
                    <p class="description">~ : the core of the game was heavily inspired by hollow knight's 'pogo' mechanic</p>
                    <p class="description">~ : it taught me a lot, but looking back on it there's a lot of things i'd do differently</p>
                </div>

                <div class="right">
                </div>
            </div>

            <div class="lineBreak">
                <hr>
            </div>

            <div class="container">
                <div class="left">
                    <a href="https://www.tinosport.co.uk/" class="links"><i class="nf nf-fa-arrow_right"></i> tino sport web page</a>
                    <p class="description">tasked with rehauling the front-end of a shopify page as well as optimising back-end workflow</p>
                </div>

                <div class="right">
                </div>
            </div>

        {:else if activeTab === 'work_in_progress'}
            <div class="container">
                <div class="left">
                    <p class="command"> ~ $ work in progress projects </p>
                    <a href="https://github.com/CaptnJayce/captnjayce.github.io" class="links"><i class="nf nf-fa-arrow_right"></i> this website</a>
                    <p class="description">made in svelte, i created this site to showcase what i've done and what i'm doing. i also plan to host web games and maybe a blog in the future</p>
                </div>

                <div class="right">
                </div>
            </div>

            <div class="lineBreak">
                <hr>
            </div>

            <div class="container">
                <div class="left">
                    <a href="https://github.com/CaptnJayce/witch-way" class="links"><i class="nf nf-fa-arrow_right"></i> witch way</a>
                    <p class="description">my current long-term project, witch way is a game made in Odin & Raylib that aims to bring forth creative mechanics in a unique universe. its very early in development at the moment</p>
                </div>

                <div class="right">
                </div>
            </div>

            <div class="lineBreak">
                <hr>
            </div>
        {/if}
    </div>
</div>
<div class="boxFooter">
    <button 
        on:click={() => activeTab = 'completed_projects'} 
        class="tab-button"
        class:selected={activeTab === 'completed_projects'}
    >
        ~ : completed_projects
    </button>
    <button 
        on:click={() => activeTab = 'work_in_progress'} 
        class="tab-button"
        class:selected={activeTab === 'work_in_progress'}
    >
        ~ : work_in_progress
    </button>
</div>