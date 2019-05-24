<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

        };
    },
    computed: {

    },
    created() {
        this._tiaoZhuan()
    },
    mounted() {

    },
    watch: {

    },
    methods: {
        _tiaoZhuan() {
            this.$router.push({
                path: '/api/payPal'
            })
        }
    },
    components: {

    },
};
</script>

<style scoped lang="scss">

</style>
