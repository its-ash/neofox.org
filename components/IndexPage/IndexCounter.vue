<template>
    <section class="bg-white d-table w-100 position-relative py-5">
        <div class="container py-3">
            <h2 class="h1">Large or Small, We’ve Got You Covered</h2>
            <p class="text-black-50 para-desc">Our talented team of a web developer, digital strategists, graphic
                artists,
                marketers and project managers work in a collaborative manner on projects for each and every client.
                Working
                together in teams, Neofox can generate successful online results for our clients.
            </p>

        </div>
        <div class="row p-0 m-0 bg-white py-5 my-5 text-center">
            <div class="col-md-3 col-6 position-relative row p-0 m-0">
                <div class="col-12 position-absolute font-size h1 line-2 pb-4">
                    <span v-for="digit in projects.toString().split('')" class="anim-text rajdhani">{{ digit }}</span>
                </div>
                <small class="col-12 text-uppercase p-0 m-0 text-primary pt-4 mt-5 line-1">optimizing</small>
                <h3 class="telex col-12 p-0 m-0 line-1 pt-3">PROJECTS</h3>
            </div>
            <div class="col-md-3 col-6 position-relative row p-0 m-0">
                <div class="col-12 position-absolute font-size h1 line-2 pb-4">
                    <span v-for="digit in clients.toString().split('')" class="anim-text rajdhani">{{ digit }}</span>
                </div>
                <small class="col-12 text-uppercase p-0 m-0 text-primary pt-4 mt-5 line-1">delighting</small>
                <h3 class="telex col-12 p-0 m-0 line-1 pt-3">CLIENTS</h3>
            </div>
            <div class="col-md-3 col-6 position-relative row p-0 m-0 mt-md-0 mt-5">
                <div class="col-12 position-absolute font-size h1 line-2 pb-4">
                    <span class="anim-text rajdhani">02</span>
                </div>
                <small class="col-12 text-uppercase p-0 m-0 text-primary pt-4 mt-5 line-1">awesome</small>
                <h3 class="telex col-12 p-0 m-0 line-1 pt-3">PRODUCTS</h3>
            </div>
            <div class="col-md-3 col-6 position-relative row p-0 m-0 mt-md-0 mt-5">
                <div class="col-12 position-absolute font-size h1 line-2 pb-4">
                    <span class="anim-text rajdhani">{{ issue }}</span>
                </div>
                <small class="col-12 text-uppercase p-0 m-0 text-primary pt-4 mt-5 line-1">optimizing</small>
                <h3 class="telex col-12 p-0 m-0 line-1 pt-3">BUG FIXED</h3>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "IndexCounter",
    data: () => ({
        timeStamp: 0,
        projects: 47,
        issue: 10,
        totalIssue: 0,
        totalProjects: 0,
        clients: 32,
        totalClients: 0,
        projectTimeInterval: undefined,
        clientsTimeInterval: undefined,
    }),
    mounted() {
        this.timeStamp = Math.round(Date.now() / 100000000) - 16299;

        this.projects = this.timeStamp + 107;
        this.totalProjects = 60 + this.projects;

        this.issue = this.timeStamp + 497;

        this.clients = this.timeStamp + 24;
        this.totalClients = 23 + this.clients;

        this.projectTimeInterval = setInterval(() => {
            this.projects += 1;
            if (this.projects === this.totalProjects) clearInterval(this.projectTimeInterval)
        }, 2400)


        this.totalClients = setInterval(() => {
            this.clients += 1;
            if (this.projects === this.totalClients) clearInterval(this.totalClients)
        }, 3500)
    }
}
</script>

<style scoped lang="scss">
@import "assets/scss/_variables.scss";

.font-size {
    font-size: calc(100px + 2vw) !important;
}

.projects {
    color: $warning !important;
}

.clients {
    color: lighten($primary, 15%) !important;
}

.anim-text {
    animation-duration: 0ms !important;
}
</style>
