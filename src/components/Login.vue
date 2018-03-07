<template>
<div>
    <slot>
        hello
    </slot>
</div>
</template>

<script>
export default {
    created () {
        document.title = 'Логин';
    },
};
</script>

