<script lang="ts">
	let { children } = $props();
    import { base } from "$app/paths";
</script>

<style>
    :global {
        body {
            font-family: Hack;
            color: #FDF0ED;
            background-color: #232530;
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
        justify-content: center;
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
        width: 30px;
        margin: 0rem 5rem 0rem 5rem;
    }
    .navText:hover {
        color: #3FC6DE;
    }

    a {
        text-decoration: none;
        color: #FDF0ED;
    }
</style>

<div class="layout">
    <nav class="nav">
        <a href="{base}/" class="navText">home</a>
        <a href="{base}/projects" class="navText">projects</a>
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