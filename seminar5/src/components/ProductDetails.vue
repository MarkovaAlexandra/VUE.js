<!-- Вы разрабатываете приложение для интернет-магазина и у вас есть компонент Vue под названием "ProductDetails". Компонент отображает детали о конкретном продукте, включая его название, цену и статус доступности.

Внутри компонента "ProductDetails" создайте свойство "product" с объектом, представляющим информацию о продукте. Объект должен иметь свойства "name" (название продукта), "price" (цена продукта) и "available" (флаг, указывающий на доступность продукта).

Используя вычисляемое свойство, назовите его "formattedPrice", которое будет возвращать форматированную цену продукта со знаком валюты. Например, если цена равна 99.99, вычисляемое свойство должно вернуть строку "$99.99".

В компоненте "ProductDetails" отобразите название продукта, его форматированную цену и статус доступности.

Если продукт доступен, отобразите текст "Available", в противном случае - "Out of stock". -->

<template>
    <div class="product">
        <p>
            {{ product.name }} - {{ formattedPrice }} - </p>
        <p v-if="product.isAvailable"> Available</p>
        <p v-else> Out of stock</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            product:
            {
                name: 'product1',
                price: 1000,
                isAvailable: false,
            },


        }
    },
    computed: {

        formattedPrice() {

            return ('$' + this.product.price);
        }
    }
}

</script>
<style >
.product {
    font-size: 24px;
    display: flex;
    border: 1px solid black;
}
</style>