<template>
    <div>
        <img :src="bigImg" width='500' alt="">
        <div class="gallery">
            <img width="200" @click="selectImg(turtle)" v-for="(turtle, index) in turtles" :key="index" :src="turtle"
                alt="turtle">

        </div>
    </div>
</template>

<script>
import img from "@/assets/img/turtle3.jpg";
export default {
    data() {
        return {
            bigImg: '',
            turtles: {
                turtle1: require('@/assets/img/turtle1.jpg'),
                turtle2: require('@/assets/img/turtle2.jpg'),
                turtle3: img,
                turtle4: require('@/assets/img/turtle4.jpg'),

            }
        }
    },
    methods: {
        selectImg(turtle) {
            this.bigImg = turtle;
        }
    },

}
</script>