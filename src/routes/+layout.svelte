<script lang="ts">
	let { children } = $props();
    import { base } from "$app/paths";
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

    .nav {
        display: flex;
        background-color: var(--kde-bg);
        height: 26px;
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
        justify-content: center;
        color: #FDF0ED;
        font-size: 16px;
        margin: 2px 25px 0px 25px;
    }
    .navText:hover {
        color: var(--arch-blue);
    }

    .navIcon {
        color: #FDF0ED;
        font-size: 16px;
        margin: 2px 25px 0px 25px;
    }
    .navIcon:hover {
        color: var(--arch-blue);
    }
    a {
        text-decoration: none;
        color: #FDF0ED;
    }
</style>

<div class="layout">
    <nav class="nav">
        <a href="{base}/" class="navIcon"><i class="nf nf-md-arch"></i></a>
        <a href="{base}/projects" class="navText">Projects</a>
        <a href="{base}/games" class="navText">Games</a>
        <a href="{base}/info" class="navText">Info</a>
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