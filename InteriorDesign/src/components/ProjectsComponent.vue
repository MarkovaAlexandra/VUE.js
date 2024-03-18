<template>
    <div>
        <section class="banner">
            <div class="banner-content center">
                <h1 class="banner-content_title">Let Your Home<br>
                    Be Unique</h1>
                <div class="banner-content_info">There are many variations of the passages of<br>
                    lorem Ipsum fromavailable, majority.</div>
                <button class="startBtn">Get Started <svg width="18" height="17" viewBox="0 0 18 17" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                            stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                </button>

            </div>
        </section>


        <section class="projects">
            <div class="projects-content center">
                <div class="heading">
                    <h3 class="heading_title">Follow Our Projects</h3>
                    <div class="heading_info">It is a long established fact that a reader will be distracted by the of
                        readable content of page lookings at its layouts points</div>
                </div>
                <div class="project-items">

                    <div v-for="project in projects" :key="project.id" class="project">
                        <div class="project__image"><img :src=project.image alt="photo-project"></div>
                        <div class="project-info">
                            <div class="project-descr">
                                <div class="project__title">{{ project.title }}</div>
                                <div class="project__text">{{ project.text }}</div>
                            </div>
                            <button class="project__btn"><img :src=arrow alt="arrowBtn"></button>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arrow: require('@/assets/imgInterior/arrow.svg'),
            projects: [
                {
                    id: 1,
                    image: require('@/assets/imgInterior/Photo1.png'),
                    title: 'Modern Kitchan',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 2,
                    image: require('@/assets/imgInterior/Photo2.png'),
                    title: 'Modern Kitchan',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 3,
                    image: require('@/assets/imgInterior/Photo3.png'),
                    title: 'Modern Kitchan',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 4,
                    image: require('@/assets/imgInterior/Photo4.png'),
                    title: 'Modern Kitchan',
                    text: 'Decor / Artchitecture',
                },
            ]
        }
    },
}
</script>

<style lang="scss">
.banner-content {
    background-image: url('@/assets/imgInterior/Banner.png');
    min-height: 356px;
    padding: 208px 0px 208px 52px;
    background-size: cover;
    background-position: center;
    border-radius: 30px;
    margin-bottom: 96px;

    &_title {

        font-size: 65px;
        font-weight: 400;
        line-height: 81px;
        letter-spacing: 0em;
        text-align: left;
        color: #292F36;
        margin-bottom: 18px;
    }

    &_info {
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        text-align: left;
        color: #292F36;
        margin-bottom: 21px;

    }
}



.startBtn {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 26px 49px;
    border-radius: 18px;
    background-color: #292F36;

    color: #FFF;
    font-family: Jost;
    font-size: 18px;
    font-weight: 600;
    line-height: 23px;
    text-align: center;
    transition: background-color 0.3s;
}

.startBtn:hover {
    background-color: #CDA274;
}

.startBtn:hover path {
    stroke: black;
}

//-----------------projects----------
.projects {}

.projects-content {}

.heading {
    max-width: 737px;
    margin: 0 auto;

    &_title {
        font-family: dm_serif_displayregular;
        font-size: 50px;
        font-weight: 400;
        line-height: 63px;
        letter-spacing: 0.02em;
        text-align: center;
        color: #292F36;
    }

    &_info {
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        text-align: center;
        color: #292F36;

    }
}

.project-items {
    margin-top: 93px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.project-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 56px;
}

.project {

    &__image {
        margin-bottom: 43px;
    }

    &__title {
        font-family: dm_serif_displayregular;
        font-size: 25px;
        font-weight: 400;
        line-height: 31px;
        letter-spacing: 0.02em;
        text-align: left;
        color: #292F36;

    }

    &__text {
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        text-align: left;
        color: #292F36;
    }

    &__btn {
        padding: 26px 31px;
        border-radius: 50%;
        background-color: #F4F0EC;
        border: none;
    }
}
</style>