<template>
    <div>
        <section class="blog-banner">

        </section>

        <section class="articles-tags-section">
            <div class="articles-tags-content center">
                <div class="articles-box">
                    <div v-if="articlesChoosen.length == 0" class="emptyResult">Пока ничего нет, попробуйте выбрать другой
                        тег</div>
                    <div v-for="article in articlesChoosen" :key="article.id" class="article">
                        <div class="article__title">{{ article.title }}</div>
                        <div class="article__img">
                            <img :src=article.img alt="design">
                        </div>
                        <div class="article__text">{{ article.text }}</div>
                    </div>
                </div>
                <div class="tags-box">
                    <h3 class="tags-heading">Tags</h3>
                    <button @click="showArticle(tag.tag)" v-for="tag in tags" :key="tag.id" class="tagBtn">{{ tag.tag
                    }}</button>


                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            articles: [
                {
                    id: 1,
                    tag: 'Kitchen',
                    title: 'Статья про кухню',
                    img: require('@/assets/imgInterior/kitchen.jpg'),
                    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo consequatur expedita blanditiis eligendi officiis quod ut ipsa odio nisi corporis similique incidunt quia beatae sapiente deleniti quisquam, eius architecto hic fuga pariatur, repudiandae, delectus alias amet voluptates? Dolor suscipit adipisci laborum dolorum facilis quidem deleniti repellendus, sequi consequuntur deserunt libero!`

                },
                {
                    id: 2,
                    tag: 'Bedroom',
                    title: 'Статья про спальню',
                    img: require('@/assets/imgInterior/bedroom.jpg'),
                    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo consequatur expedita blanditiis eligendi officiis quod ut ipsa odio nisi corporis similique incidunt quia beatae sapiente deleniti quisquam, eius architecto hic fuga pariatur, repudiandae, delectus alias amet voluptates? Dolor suscipit adipisci laborum dolorum facilis quidem deleniti repellendus, sequi consequuntur deserunt libero!`

                },
                {
                    id: 3,
                    tag: 'Kids',
                    title: 'Статья про детскую',
                    img: require('@/assets/imgInterior/kids.jpg'),
                    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo consequatur expedita blanditiis eligendi officiis quod ut ipsa odio nisi corporis similique incidunt quia beatae sapiente deleniti quisquam, eius architecto hic fuga pariatur, repudiandae, delectus alias amet voluptates? Dolor suscipit adipisci laborum dolorum facilis quidem deleniti repellendus, sequi consequuntur deserunt libero!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo consequatur expedita blanditiis eligendi officiis quod ut ipsa odio nisi corporis similique incidunt quia beatae sapiente deleniti quisquam, eius architecto hic fuga pariatur, repudiandae, delectus alias amet voluptates? Dolor suscipit adipisci laborum dolorum facilis quidem deleniti repellendus, sequi consequuntur deserunt libero!`

                },
                {
                    id: 3,
                    tag: 'Kids',
                    title: 'Другая статья про детскую',
                    img: require('@/assets/imgInterior/kids2.jpg'),
                    text: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo consequatur expedita blanditiis eligendi officiis quod ut ipsa odio nisi corporis similique incidunt quia beatae sapiente deleniti quisquam, eius architecto hic fuga pariatur, repudiandae, delectus alias amet voluptates? Dolor suscipit adipisci laborum dolorum facilis quidem deleniti repellendus, sequi consequuntur deserunt libero!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo consequatur expedita blanditiis eligendi officiis quod ut ipsa odio nisi corporis similique incidunt quia beatae sapiente deleniti quisquam, eius architecto hic fuga pariatur, repudiandae, delectus alias amet voluptates? Dolor suscipit adipisci laborum dolorum facilis quidem deleniti repellendus, sequi consequuntur deserunt libero!`

                },

            ],
            articlesChoosen: [],
            tags: [
                {
                    id: 1,
                    tag: "Kitchen",
                },
                {
                    id: 2,
                    tag: "Bedroom",
                },
                {
                    id: 3,
                    tag: "Kids",
                },
                {
                    id: 4,
                    tag: "Building",
                },
                {
                    id: 5,
                    tag: "Architecture",
                },
                {
                    id: 6,
                    tag: "Kitchen Planing",
                },
            ]
        }
    },
    methods: {
        showArticle(tag) {
            this.articlesChoosen = this.articles.filter(article => article.tag == tag);
        }
    },
}
</script>
<style lang="scss" >
.blog-banner {
    height: 351px;
    background: url("@/assets/imgInterior/blog-banner.jpg");
    margin-bottom: 200px;
}

.emptyResult {
    font-size: 50px;
    font-weight: 400;
    line-height: 63px;
    letter-spacing: 0.02em;
    text-align: left;
}

.articles-tags-content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 96px;
}

.articles-box {
    width: 65%;
}

.tags-box {
    width: 30%;
}

.tags-heading {
    font-family: DM Serif Display;
    font-size: 25px;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0.02em;
    text-align: left;

}

.tagBtn {
    font-family: Jost;
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.02em;
    color: #292F36;
    text-align: center;
    background-color: #F4F0EC;
    padding: 9px 30px;
    border-radius: 10px;
    margin: 5px;
    border: none;
}

.tagBtn:hover {
    color: #F4F0EC;
    background-color: #292F36;
    ;
}

.article {
    margin-bottom: 50px;

    &__title {
        font-size: 50px;
        font-weight: 400;
        line-height: 63px;
        letter-spacing: 0.02em;
        text-align: left;
    }

    &__img img {
        border-radius: 45px;
        margin: 20px 0;
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
</style>