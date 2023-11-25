<script setup>
const props = defineProps(['href']);
</script>

<template>
    <p>
        <a :href="props.href" class="btn btn-primary text-base" target="_blank">
            <ContentSlot :use="$slots.default" unwrap="p" />
        </a>
    </p>
</template>