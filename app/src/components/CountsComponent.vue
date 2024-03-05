<template>
    <div>
        <section class="counts">
            <div class="counts-content center">
                <div class="count-item">
                    <div class="count-number">12</div>
                    <div class="count-descr">Years Of Experiance</div>
                </div>
                <div class="count-item">
                    <div class="count-number">85</div>
                    <div class="count-descr">85
                        Success Project</div>
                </div>
                <div class="count-item">
                    <div class="count-number">15</div>
                    <div class="count-descr">Active Project</div>
                </div>
                <div class="count-item">
                    <div class="count-number">95</div>
                    <div class="count-descr">Happy CUstomers</div>
                </div>
            </div>
        </section>
    </div>
</template>


<style lang="scss">
.counts {
    margin-top: 40px;
    background-color: #F4F0EC;
    margin-bottom: 96px;
    padding: 151px 0;
}

.counts-content {

    display: flex;
}

.count-item {
    border-right: 1px solid #CDA274;
    width: 25%;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.count-item:last-child {
    border: none;
}

.count-number {
    font-family: DM Serif Display;
    font-size: 85px;
    font-weight: 400;
    line-height: 106px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #CDA274;

}

.count-descr {
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #292F36;
}
</style>