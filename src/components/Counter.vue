<template>
    <button @click="increment">Increment</button>
    <div v-if="count % 2 === 0">
        Count: {{count}}. Count is even.
    </div>
    <div v-if="count % 2 !== 0">
        Count: {{count}}. Count is odd.
    </div>
</template>

<script setup>
    import {computed} from 'vue';
    import {useStore} from 'vuex';

    const store = useStore();
    const count = computed(() => store.state.count);

    const increment = () => {
        store.commit('increment');
    }
</script>