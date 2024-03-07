<!-- Вам необходимо создать компонент ипотечного калькулятора,
который позволяет пользователю вводить сумму кредита,
процентную ставку и срок кредита. Компонент должен автоматически
вычислять ежемесячный платеж и общую сумму выплаты по кредиту.
1. Создайте компонент MortgageCalculator с соответствующим шаблоном и скриптом.
2. В шаблоне компонента разместите поля ввода для суммы кредита, процентной
ставки и срока кредита, а также элементы для отображения ежемесячного платежа
и общей суммы выплаты.
3. Используйте директиву v-model для связывания введенных пользователем
значений с соответствующими свойствами в компоненте.
4. Создайте вычисляемое свойство monthlyPayment, которое будет вычислять
ежемесячный платеж на основе введенных значений суммы кредита, процентной
ставки и срока кредита.
5. Создайте вычисляемое свойство totalPayment, которое будет вычислять общую
сумму выплаты по кредиту, учитывая ежемесячный платеж и срок кредита.
6. Отобразите значения monthlyPayment и totalPayment в соответствующих элементах
шаблона. -->
<template>
    <div>
        <input type="number" placeholder="сумма кредита" v-model="credit">
        <input type="number" placeholder="процентная ставка" v-model="percent">
        <input type="number" placeholder="срок кредита" v-model="period">
        <p>Ежемесячный платеж: {{ monthlyPayment.payByMonth }} </p>
        <p>Общая сумма выплаты: {{ monthlyPayment.total }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            credit: null,
            percent: null,
            period: null,
        }
    },
    computed: {
        monthlyPayment() {
            //все формулы и рассчеты сгуглены
            const principal = parseFloat(this.credit);
            const interestRate = parseFloat(this.percent) / 100 / 12;
            const loanTermMonths = parseFloat(this.period) * 12;

            const numerator = principal * interestRate * Math.pow(1 + interestRate, loanTermMonths);
            const denominator = Math.pow(1 + interestRate, loanTermMonths) - 1;
            const payByMonth = (numerator / denominator).toFixed(2);
            const total = (payByMonth * 12 * this.period).toFixed(2);
            return { payByMonth, total };
        }
    }
}
</script>
