<!-- Создать компонент UserList, который будет отображать список пользователей из переданного массива. Каждый пользователь должен быть представлен в виде отдельного компонента User, принимающего пропсы с данными о пользователе (например, имя, фамилия, эл. почта) -->
<template>
    <UserComponent v-for="user in users" :key="user.id" :user="user" />
</template>

<script>
import UserComponent from "./UserComponent.vue";
export default {
    components: {
        UserComponent,
    },
    data() {
        return {
            users: [
                {
                    id: 1,
                    name: "John",
                    email: "john@mail.com",
                },
                {
                    id: 1,
                    name: "Mary",
                    email: "mary@mail.com",
                },
                {
                    id: 1,
                    name: "Max",
                    email: "max@mail.com",
                },
            ]

        }
    },
}
</script>
