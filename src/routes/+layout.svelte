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
        currentTime = new Date().toLocaleTimeString('en-GB');
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
            --link-blue: #21BFC2;
            --command-green: #29D398;
            --red: #F43E5C;
            --dark-bg: #1A1C23;
            --white: #FDF0ED;
        }
        body {
            font-family: Hack;
            color: var(--white);
            background-color: #16161C;
            margin: 0;
        }

        .title {
            color: var(--white);
        }

        .command {
            color: var(--command-green);
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
        background-color: var(--dark-bg);
        width: 50%;
    }
    .navRight {
        display: flex;
        justify-content: right;
        background-color: var(--dark-bg);
        width: 50%;
    }

    .content {
        flex: 1;
    }

    .footer {
        text-align: center;
        color: var(--white);
    }

    .footerText {
        display: inline;
        margin: 0px 100px 0px 100px;
    }

    .navText {
        color: var(--white);
        font-size: 16px;
        margin: 9px 25px 0px 25px;
    }
    .navText:hover {
        color: var(--link-blue);
    }
    
    .navIcon {
        color: var(--white);
        font-size: 30px;
        margin: 0px 25px 0px 25px;
    }
    .navIcon:hover {
        color: var(--link-blue);
    }

    a {
        color: var(--white);
        text-decoration: none;
    }
</style>

<div class="layout">
    <nav class="navBar">
        <div class="navLeft">
            <!-- svelte-ignore a11y_consider_explicit_label -->
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
</div>