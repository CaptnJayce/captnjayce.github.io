<script>
 	import pfp from '$lib/images/invincible_pfp.png';   
</script>

<style>
    .box {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        height: 90%;
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        justify-items: center;
        text-align: center;
        box-shadow: 0 0 0.6rem #EC6A88;
    }

    .right {
        display: inline-block;
        position: relative;
        width: 49.5%;
        height: 100%;
    }
    .rightText {
        position: relative;
        top: 42%;
    }
    .rightUsername {
        font-size: 3rem;
    }

    .left {
        display: inline-block;
        position: relative;
        width: 49.5%;
        height: 100%;
    }
    .leftPfp {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 33%;
        border-radius: 50%;
        filter: contrast(90%) brightness(80%);
    }
</style>

<div class="box"> 
    <div class="left">
        <img alt="leftPfp" class="leftPfp" src={pfp} />
    </div>
    <div class="right">
        <div class="rightText">
            <p class="rightUsername"> CaptnJayce </p>
        </div>
    </div>
</div>
