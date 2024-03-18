<template>
    <div>
        <section class="page-banner">
            <div class="page-banner-content">
                <div class="page-banner__title">Our project</div>
                <div class="page-banner__menu">
                    <a href="#">Home /</a>
                    <a href="#">Project</a>
                </div>
            </div>
        </section>
        <section class="buttons center">
            <div class="buttons-box">
                <button @click="show" class="button-project" v-for="button in buttons" :key="button.id">{{ button.name
                }}</button>

            </div>
        </section>
        <section class="project-box center">
            <div v-for="project in projectsChoosen" :key="project.id" class="project-item">
                <div class="project-item__image">
                    <img :src="project.image" alt="photo">
                </div>
                <div class="text-and-btn">
                    <div class="project-description">
                        <div class="project-item__title">{{ project.title }}</div>
                        <div class="project-item__text">{{ project.text }}</div>
                    </div>
                    <button class="blog-btn"><img :src=arrow_small alt="arrow"></button>
                </div>
            </div>
        </section>
        <section class="circles-section">
            <div class="circles center">
                <div class="circle">01</div>
                <div class="circle">02</div>
                <div class="circle">03</div>
                <div class="circle">04</div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arrow_small: require('@/assets/imgInterior/arrow-small.svg'),
            buttons: [
                {
                    id: 1,
                    name: 'Bathroom',
                },
                {
                    id: 2,
                    name: 'Bedroom',
                },
                {
                    id: 3,
                    name: 'Kitchen',
                },
                {
                    id: 4,
                    name: 'Living Area',
                },
            ],
            projectsChoosen: [],
            projects: [
                {
                    id: 1,
                    image: require('@/assets/imgInterior/projects/Imagebedroom_1.jpg'),
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 2,
                    image: require('@/assets/imgInterior/projects/Imagebedroom_2.jpg'),
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 3,
                    image: require('@/assets/imgInterior/projects/Imagebedroom_3.jpg'),
                    title: ' Classic Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 4,
                    image: require('@/assets/imgInterior/projects/Imagebedroom_4.jpg'),
                    title: 'Modern Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 5,
                    image: require('@/assets/imgInterior/projects/Imagebedroom_5.jpg'),
                    title: 'Minimal Bedroom Table',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 6,
                    image: require('@/assets/imgInterior/projects/Imagebedroom_6.jpg'),
                    title: 'Sysytem Bedroom Table',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 7,
                    image: require('@/assets/imgInterior/projects/Imagebedroom_7.jpg'),
                    title: ' Modern Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 8,
                    image: require('@/assets/imgInterior/projects/Imagebedroom_8.jpg'),
                    title: 'Modern Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 9,
                    image: require('@/assets/imgInterior/kids.jpg'),
                    title: 'Living Area',
                    text: 'Decor / Artchitecture',
                },
                // {
                // id: 10,
                // image: require('@/assets/imgInterior/living_design_1.jpg'),
                // title: 'Modern Living Area',
                // text: 'Decor / Artchitecture',
                // },
                {
                    id: 11,
                    image: require('@/assets/imgInterior/living_design_2.jpg'),
                    title: 'Modern Living Area',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 12,
                    image: require('@/assets/imgInterior/living_design_3.jpg'),
                    title: 'Modern Living Area',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 13,
                    image: require('@/assets/imgInterior/bathroom_1.jpg'),
                    title: 'Modern Bathroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 14,
                    image: require('@/assets/imgInterior/bathroom_2.jpg'),
                    title: 'Modern Bathroom',
                    text: 'Decor / Artchitecture',
                },

            ]
        }
    },
    methods: {


        show(event) {
            console.log(event.target.innerHTML);
            console.log('smth');
            const target = event.target.innerHTML;
            this.projectsChoosen = this.projects.filter((project) => project.title.includes(target));
            console.log(this.projectsChoosen);
        },



    }
}
</script>

<style lang="scss" scoped>
//стили для секции баннер в общем scss файле
.page-banner {
    background-image: url('@/assets/imgInterior/projects/banner.jpg');
}

.buttons {
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
}

.buttons-box {
    border-radius: 18px;
    border: 1px solid #CDA274;

}

.button-project {
    padding: 26px 66px;
    border-radius: 18px;
    background-color: #fff;
    color: #292F36;
    border: none;
    font-family: Jost;
    font-size: 18px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0.02em;
    text-align: center;

}

.button-project:hover {
    background-color: #CDA274;
    color: #fff;
}

.project-box {
    column-count: 2;
    column-fill: balance;
    margin-bottom: 60px;
}

.project-item {
    page-break-inside: avoid;
    break-inside: avoid;
    margin-bottom: 35px;

    &__image {
        margin-bottom: 24px;
    }

    &__title {
        font-family: dm_serif_displayregular;
        font-size: 25px;
        font-weight: 400;
        line-height: 31px;
        letter-spacing: 0.02em;
        text-align: left;
    }

    &__text {
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        text-align: left;

    }
}



.text-and-btn {
    display: flex;
    justify-content: space-between;
}

//стили кружков в общем sccs файле
</style>