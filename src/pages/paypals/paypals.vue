<template>
    <div class="box">
        <Loading size="60px"></Loading>
        <p>加载中...</p>
    </div>
</template>

<script>
import { Loading } from 'vant';
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
        this._open()
    },
    mounted() {
        
    },
    watch: {

    },
    methods: {
        _open() {
            let urls = this.$route.query.url
            this.url = urls
            window.location.replace(urls);
        }
    },
    components: {
        Loading
    },
};
</script>

<style>
    .box{position: relative;top: 50%;left: 50%;margin-top: -30px;margin-left: -30px}
</style>
