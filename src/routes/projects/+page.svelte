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
        justify-content: center;
        justify-items: center;
        text-align: center;
        background-color: var(--kde-bg);
    }

    .right {
        width: 50%;
        height: 100%;
    }
    .rightText {
        display: grid;
        justify-items: center;
    }

    .left {
        width: 50%;
        height: 100%;
    }
    .leftText{
        display: grid;
        justify-content: center;
    }
</style>

<div class="box"> 
    <div class="left">
        <div class="leftText">
            <p> completed projects </p>
        </div>
    </div>

    <hr>

    <div class="right">
        <div class="rightText">
            <p> wip projects </p>
        </div>
    </div>
</div>
