<template>
    <section class="py-1 bg-light">
        <div class="container-fluid px-md-5 px-1">
            <div class="row justify-content-around align-items-center">
                <div v-for="item in items" class="col-lg-1 col-md-2 col-2 text-center py-4">
                    <img data-bs-toggle="tooltip" data-bs-placement="top" :title="item.split('.')[0].toUpperCase()"
                         :src="imagePath(item)" class="avatar w-100 p-lg-3 p-0"
                         style="max-width: 7rem!important;"
                         :alt="'Neofox solution for '+item.split('.')[0].toUpperCase()">
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section>
</template>

<script>
export default {
    name: "TechList",
    props: {
        items: {
            type: Array,
            default: []
        }
    },
    methods: {
        imagePath: (item) => '/svg/tech/' + item
    }
}
</script>

<style scoped>

</style>
