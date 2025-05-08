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
        justify-content: center;
        justify-items: center;
        text-align: center;
        background-color: #1A1C23;
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
        background-color: #31363b;
        z-index: 1;

        border-top: 1px solid;
    }

    .right {
        margin-top: 64px;
        width: 77%;
        height: 100%;
    }
    .rightText {
        display: grid;
        justify-items: left;
    }
    .rightText p {
        margin: 4px;
    }
    .indent {
        display: grid;
        justify-items: left;
        text-indent: 30px;
    }

    .left {
        width: 23%;
        height: 100%;
    }
    .leftText{
        display: grid;
        justify-content: left;
    }
</style>

<div class="box"> 
    <div class="left">
        <div class="leftText">

            <p class="command">~ $ fastfetch</p>
                <pre style="color: var(--red)">
    .
    / \
    /   \
    /\    \
    /       \
    /         \
    /    .-.    \
    /    |   |    \
    /   .'     '.   \
    /.-'          '-._\
                </pre>
        </div>
    </div>
    <div class="right">
        <div class="rightText">
            <p style="color:var(--red)">captn<span style="color: var(--white)">@</span>portfolio_website</p>
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
