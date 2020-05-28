<template>
    <div>
        <h2 class="test">
            {{ title }}
        </h2>
    </div>
</template>

<script>
export default {
    data: () => ({ title: "Applying CSS styles" }),
};
</script>

<style>
.test {
    font-size: 40px;
}
</style>
