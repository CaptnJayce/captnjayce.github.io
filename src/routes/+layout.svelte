<script lang="ts">
	let { children } = $props();
    import { base } from "$app/paths";
    import { onMount, onDestroy } from 'svelte';
  
    let currentTime = $state();
    let interval: number;
    
    const updateTime = () => {
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
            --blue: #21BFC2;
            --red: #F43E5C;
            --pink: #EE64AE;
            --dark-bg: #1A1C23;
            --white: #FDF0ED;
            --purple: #B877DB;
        }
        body {
            font-family: Hack;
            color: var(--white);
            background-color: #16161C;
            margin: 0;
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

    .navText {
        color: var(--white);
        font-size: 16px;
        margin: 9px 25px 0px 25px;
    }
    .navText:hover {
        font-weight: bold;
        color: var(--red);
    }
    
    .navIcon {
        color: var(--red);
        font-size: 30px;
        margin: 0px 25px 0px 25px;
    }
    .navIcon:hover {
        color: var(--red);
        font-weight: bold;
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
        </div>
        <div class="navRight">
            <div class="navText">My Time: {currentTime}</div>
        </div>
    </nav>

    <main class="content">
        {@render children()}
    </main>
</div>