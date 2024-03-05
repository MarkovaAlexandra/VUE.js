<template>
    <div>
        <section class="blogs">
            <div class="blogs-content center">
                <div class="heading">
                    <h3 class="heading_title">Articles & News</h3>
                    <div class="heading_info">It is a long established fact that a reader will be distracted by the of
                        readable content of a page when lookings at its layouts the points of using.</div>
                </div>
                <div class="blogs-items">

                    <div v-for="blog in blogs" :key="blog.id" class="blog">
                        <div class="blog__img"><img :src=blog.img alt="picture"></div>
                        <div class="blog-title">
                            {{ blog.title }}
                            <div class="data-and-btn">
                                <div class="date">{{ blog.date }} </div>
                                <button class="blog-btn"><img :src=arrow_small alt="arrow"></button>
                            </div>
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
            arrow_small: require('@/assets/imgInterior/arrow-small.svg'),
            blogs: [
                {
                    id: 1,
                    img: require("@/assets/imgInterior/blog/Photo1.png"),
                    title: `Let's Get Solution For Building Construction
                        Work`,
                    date: '26 December,2022 ',
                },
                {
                    id: 2,
                    img: require("@/assets/imgInterior/blog/Photo2.png"),
                    title: `Low Cost Latest Invented Interior Designing
                         Ideas.`,
                    date: '22 December,2022',
                },
                {
                    id: 3,
                    img: require("@/assets/imgInterior/blog/Photo3.png"),
                    title: `Best For Any Office &
                        Business Interior
                            Solution`,
                    date: '25 December,2022',
                },
            ]
        }
    },
}
</script>

<style lang="scss">
.blogs-items,
.articles {
    margin-top: 52px;
    display: grid;
    grid-template-columns: 32% 32% 32%;
    justify-content: space-between;
}

.blog {
    display: flex;
    flex-direction: column;
    padding: 21px 21px 37px 21px;
    border: 1px solid #E7E7E7;
    border-radius: 62px;
    margin-bottom: 28px;
    position: relative;
    transition: background-color 0.3s;




}



.blog:hover {
    background-color: #F4F0EC;

}

.blog:hover .blog-btn {
    background-color: #FFF;
}

.blog-title {
    flex: 1;
    font-family: DM Serif Display;
    font-size: 25px;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #292F36;
    margin-bottom: 28px;
}

.data-and-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.date {
    font-family: Jost;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.01em;
    text-align: left;

}

.blog-btn {
    padding: 19px 23px;
    background-color: #F4F0EC;
    border-radius: 50%;
    border: none;
}
</style>