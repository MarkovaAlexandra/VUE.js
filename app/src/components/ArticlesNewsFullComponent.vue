<template>
    <div>
        <section class="blog-banner">
            <div class="blog-banner-content">
                <div class="blog-banner__title">Articles & News</div>
                <div class="blog-banner__text">Home / Blog</div>
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
                                <button class="blog-btn"><img :src=arrow_small alt=""></button>
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

                },
                {
                    id: 2,
                    img: require('@/assets/imgInterior/blog/Photo2.png'),
                    text: "Low Cost Latest Invented Interior Designing Ideas.",
                    date: "22 December 2022",

                },
                {
                    id: 3,
                    img: require('@/assets/imgInterior/blog/Photo3.png'),
                    text: "Best For Any Office & Business Interior Solution",
                    date: "25 December 2022",

                },
                {
                    id: 4,
                    img: require('@/assets/imgInterior/blog/Photo4.png'),
                    text: "Let's Get Solution For Building Construction Work",
                    date: "22 December 2022",

                },
                {
                    id: 5,
                    img: require('@/assets/imgInterior/blog/Photo5.png'),
                    text: "Low Cost Latest Invented Interior Designing Ideas.",
                    date: "26 December 2022",

                },
                {
                    id: 6,
                    img: require('@/assets/imgInterior/blog/Photo6.png'),
                    text: "Best For Any Office & Business Interior Solution",
                    date: "22 December 2022",

                },
            ]
        }
    }
}
</script>




<style lang="scss">
.blog-banner {
    background-image: url('@/assets/imgInterior/blog/banner-blog.jpg');
    background-position: center;
    background-size: cover;
    height: 356px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 200px;

    &__title {
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        line-height: 63px;
        letter-spacing: 0em;
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

.blog-banner-content {
    background-color: #FFF;
    padding: 41px 78px;
    border-top-left-radius: 37px;
    border-top-right-radius: 37px;

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
    font-family: DM Serif Display;
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
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 63px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #292F36;
    margin-bottom: 27px;

}

//эти кружки надо будет заменить чем-то функциональным
.circles-section {
    margin-bottom: 200px;
}

.circles {
    display: flex;
    margin-bottom: 200px;
    justify-content: center;
}

.circle {
    background-color: #F4F0EC;
    width: 52px;
    height: 52px;
    margin-right: 20px;
    border-radius: 50%;
    border: 1px solid #CDA274;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>