<script lang="ts">
	let { children } = $props();
    import { base } from "$app/paths";
    import { onMount, onDestroy } from 'svelte';
  
    let currentTime = $state();
    let interval: number;
    
    const updateTime = () => {
        const options = {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
        };
        currentTime = new Date().toLocaleTimeString('en-GB', options);
    };
    
    onMount(() => {
        updateTime();
        interval = setInterval(updateTime, 1000);
    });
    
    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<style>
    :global {
        :root {
            --arch-blue: #1793d1;
            --kde-bg: #31363b95;
        }
        body {
            font-family: Hack;
            color: #FDF0ED;
            background-color: #232530;
            margin: 0;
        }

        .title {
            color: #FDF0ED;
        }

    }

    .layout {
        display: flex;
        flex-direction: column;
        min-height: 98vh;
    }

    .navBar {
        display: flex;
        height: 40px;
    }
    .navLeft {
        display: flex;
        justify-content: left;
        background-color: var(--kde-bg);
        width: 50%;
    }
    .navRight {
        display: flex;
        justify-content: right;
        background-color: var(--kde-bg);
        width: 50%;
    }

    .content {
        flex: 1;
    }

    .footer {
        text-align: center;
        color: white;
    }

    .footerText {
        display: inline;
        margin: 0px 100px 0px 100px;
    }

    .navText {
        color: #FDF0ED;
        font-size: 16px;
        margin: 9px 25px 0px 25px;
    }
    .navText:hover {
        color: var(--arch-blue);
    }
    
    .navIcon {
        color: #FDF0ED;
        font-size: 30px;
        margin: 0px 25px 0px 25px;
    }
    .navIcon:hover {
        color: var(--arch-blue);
    }

    a {
        color: #FDF0ED;
        text-decoration: none;
    }
</style>

<div class="layout">
    <nav class="navBar">
        <div class="navLeft">
            <a href="{base}/" class="navIcon"><i class="nf nf-md-arch"></i></a>
            <a href="{base}/projects" class="navText">Projects</a>
            <a href="{base}/games" class="navText">Games</a>
            <a href="{base}/info" class="navText">Info</a>
        </div>
        <div class="navRight">
            <div class="navText">My Time: {currentTime}</div>
        </div>
    </nav>

    <main class="content">
        {@render children()}
    </main>

    <footer class="footer">
         <a href="https://github.com/CaptnJayce" class="footerText"><i class="nf nf-fa-github"></i> CaptnJayce</a>
         <p class="footerText"><i class="nf nf-md-email_outline"></i> captn.enquiries@protonmail.com </p>
         <a href="https://captnjayce.itch.io/" class="footerText"><i class="nf nf-fa-itch_io"></i> CaptnJayce</a>
    </footer>
</div>