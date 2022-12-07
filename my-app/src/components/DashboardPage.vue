<template>
    <br>

</template>
<script>
import { useRouter } from 'vue-router';
export default {
    data() {
        return {
            router: useRouter()
        }
    },
    mounted() {
        this.router.push('/Page/Home');
    }
}
</script>