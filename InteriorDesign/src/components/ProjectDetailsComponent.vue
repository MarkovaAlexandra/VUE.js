<template>
    <div>
        <section class="page-banner">
            <!-- <div class="page-banner-content">
                <div class="page-banner__title">Articles & News</div>
                <div class="page-banner__text">Home / Blog</div>
            </div> -->
        </section>

        <section class="project-details-box center">
            <div class="project-details-item">
                <div class="item-info">
                    <div class="item-title">{{ projects[0].title }}</div>
                    <div class="item-description">{{ projects[0].descr }}</div>
                </div>
                <div class="slider-box">


                    <swiper :style="{
                        '--swiper-navigation-color': 'grey',
                        '--swiper-pagination-color': '#fff',
                    }" :zoom="true" :navigation="true" :pagination="{
    clickable: true,
}" :modules="modules" class="mySwiper center">
                        <swiper-slide>
                            <div class="swiper-zoom-container">
                                <img src="@/assets/imgInterior/slider/Image1.png" />
                            </div>
                        </swiper-slide><swiper-slide>
                            <div class="swiper-zoom-container">
                                <img class='slider-pic' src="@/assets/imgInterior/projects/Imagebedroom_6.jpg" />
                            </div>
                        </swiper-slide><swiper-slide>
                            <div class="swiper-zoom-container">
                                <img class='slider-pic' src="@/assets/imgInterior/projects/Imagebedroom_3.jpg" />
                            </div>
                        </swiper-slide><swiper-slide>
                            <div class="swiper-zoom-container">
                                <img class='slider-pic' src="@/assets/imgInterior/projects/Imagebedroom_1.jpg" />
                            </div>
                        </swiper-slide>
                    </swiper>

                </div>
            </div>
        </section>
    </div>
</template>


<script>


// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './style.css';

// import required modules
import { Zoom, Navigation, Pagination } from 'swiper/modules';
import {
    mapState
} from 'vuex';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Zoom, Navigation, Pagination],
        };
    },

    computed: {
        ...mapState(['projects'])
    }
}
</script>


<style lang="scss" scoped>
.page-banner {
    background-image: url('@/assets/imgInterior/Banner-blogDetails.png');
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    overflow: hidden;
}

.slider-pic {
    border-radius: 30px;
}

.item-info {
    max-width: 660px;
    margin: 0 auto;
    margin-bottom: 100px;
}

.item-title {
    font-family: dm_serif_displayregular;
    font-weight: 400;
    font-size: 50px;
    line-height: 62.5px;
    letter-spacing: 2%;
    color: #292F36;
    margin-bottom: 11px;

}

.item-description {

    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #4D5053;

}
</style>