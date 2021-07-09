<template>
  <div class="accordion mt-4 pt-2" :id="'_'+uuid">
    <div v-for="(answer,question) in data" class="accordion-item mt-3 rounded shadow-sm border-primary border-0">
      <h2 class="accordion-header " :id="answer | slug">
        <button class="accordion-button border-0 collapsed py-2" type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#' + question | slug" aria-expanded="false"
                :aria-controls="question | slug">
          {{ question }}
        </button>
      </h2>
      <div :id="question|slug" class="accordion-collapse border-0 collapse" :aria-labelledby="answer|slug"
           :data-bs-parent="'#_'+uuid">
        <div class="accordion-body bg-white">
          {{ answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FaqQuestion",
  props: ['data'],
  data: () => ({
    uuid: ""
  }),
  beforeMount() {
    this.uuid = this.$uuid();
  },
  methods: {
    toggleIcon(ref) {
      this.$refs[ref][0].classList.toggle('show');
      this.$refs[ref + 'icon'][0].classList.toggle('rotate-90');
      this.$refs[ref + 'icon'][0].classList.toggle('rotate-0');
    }
  }
}
</script>
