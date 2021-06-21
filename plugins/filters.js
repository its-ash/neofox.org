import Vue from 'vue'

const dateOptions = {year: 'numeric', month: 'short', day: 'numeric'};


export default () => {
  Vue.filter('date', function (value) {
    if (!value) return ''
    return Intl.DateTimeFormat('en-US', dateOptions).format(new Date(value)).toUpperCase();
  });
  Vue.filter('slug', function (value) {
    if (!value) return ''
    return value.replace(/[^a-z0-9#]+/gi, '').split(" ").join("-").toLowerCase();
  })
}
