<template>
    <div>
        <section class="page-banner">
            <div class="page-banner-content">
                <div class="page-banner__title">Articles & News</div>
                <div class="page-banner__text">Home / Blog</div>
            </div>
        </section>



        <!--Стили скопированы с первой страницы-->
        <section class="articles-section">

            <div class="latest center">
                <h3 class="articles-title">Latest post</h3>
                <div class="latest-content">
                    <div class="latest__image">
                        <img :src=mainPhoto alt="photo">
                    </div>
                    <div class="latest__descr">
                        <div class="latest__heading">Low Cost Latest Invented Interior Designing Ideas</div>
                        <p class="latest__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
                            dignissim
                            maximus.posuere in.Contrary to popular belief. </p>
                        <p class="latest__text">Lorem Ipsum is not simply random text. It has roots in a piece of
                            classica.
                        </p>
                        <div class="data-and-btn">
                            <div class="date">26 December 2022</div>
                            <button class="blog-btn"><img :src=arrow_small alt=""></button>
                        </div>
                    </div>

                </div>

            </div>
            <div class="articles-content center">
                <h3 class="articles-title">Articles & News</h3>
                <ul class="articles">
                    <li v-for="article in articlesData" :key="article.id">
                        <div class="blog">

                            <div class="blog__img"><img :src="article.img" alt="photo"></div>

                            <div class="blog-title">
                                {{ article.text }}</div>
                            <div class="data-and-btn">
                                <div class="date">{{ article.date }}</div>
                                <button class="blog-btn"><router-link :to="article.url"><img :src=arrow_small
                                            alt="follow link"></router-link></button>
                            </div>
                        </div>
                    </li>
                </ul>
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
            mainPhoto: require('@/assets/imgInterior/blog/Photo-main.png'),
            articlesData: [
                {
                    id: 1,
                    img: require('@/assets/imgInterior/blog/Photo1.png'),
                    text: `Let's Get Solution For Building Construction Work`,
                    date: "26 December 2022",
                    url: '/blog/details'

                },
                {
                    id: 2,
                    img: require('@/assets/imgInterior/blog/Photo2.png'),
                    text: "Low Cost Latest Invented Interior Designing Ideas.",
                    date: "22 December 2022",
                    url: '/blog/details'

                },
                {
                    id: 3,
                    img: require('@/assets/imgInterior/blog/Photo3.png'),
                    text: "Best For Any Office & Business Interior Solution",
                    date: "25 December 2022",
                    url: '/blog/details'

                },
                {
                    id: 4,
                    img: require('@/assets/imgInterior/blog/Photo4.png'),
                    text: "Let's Get Solution For Building Construction Work",
                    date: "22 December 2022",
                    url: '/blog/details'

                },
                {
                    id: 5,
                    img: require('@/assets/imgInterior/blog/Photo5.png'),
                    text: "Low Cost Latest Invented Interior Designing Ideas.",
                    date: "26 December 2022",
                    url: '/blog/details'

                },
                {
                    id: 6,
                    img: require('@/assets/imgInterior/blog/Photo6.png'),
                    text: "Best For Any Office & Business Interior Solution",
                    date: "22 December 2022",
                    url: '/blog/details'

                },
            ]
        }
    }
}
</script>




<style lang="scss" scoped>
//смтили для секции баннер в общем файле scss
.page-banner {
    background-image: url('@/assets/imgInterior/blog/banner-blog.jpg');

}

//--------------------

.articles-section {
    margin-bottom: 51px;
}

.latest-content {
    display: flex;
    margin-bottom: 150px;
    justify-content: space-between;
}

.latest__descr {
    width: 50%;
    display: flex;
    display: flex;
    gap: 27px;
    flex-direction: column;
    justify-content: center;
}

.latest__image img {
    width: 505;
    border-radius: 30px;
}

.latest__heading {
    font-family: dm_serif_displayregular;
    font-size: 25px;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #292F36;

}

.latest__text {
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: left;

}

//---------articles---------
.articles-title {
    font-family: dm_serif_displayregular;
    font-size: 50px;
    font-weight: 400;
    line-height: 63px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #292F36;
    margin-bottom: 27px;

}

//эти кружки надо будет заменить чем-то функциональным
//стили кружков в общем sccs файле
</style>