<template>
    <div></div>
</template>

<script>
export default {
    data() {
        return {};
    },
    async mounted() {
        let result = await this.http.Login.getNewsList({
            pageNum: "1",
            pageSize: "10",
        });

        console.log(result);
    },
};
</script>

<style scoped>
</style>
