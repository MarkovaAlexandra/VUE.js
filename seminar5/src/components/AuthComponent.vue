<!-- Создайте компонент "Аутентификация" (Authentication),
который будет отображать форму входа или сообщение об
успешной аутентификации в зависимости от переданного
пропса isAuthenticated. Используйте директиву v-if для
условного отображения разных элементов в шаблоне
компонента. -->
<template>
    <form v-if="isAuth">
        <input type="text" placeholder="имя">
        <input type="password" placeholder="пароль">
        <button>submit</button>
    </form>
    <div v-else>
        <h1>Вы зарегистрированы, ура</h1>
    </div>
</template>

<script>
export default {
    props: {
        isAuth: Boolean
    },
    data() {
        return {

        }
    },
}
</script>

<style lang="scss"></style>