var vm = new Vue({
  el: '#app',
  data: {
    departures: []
  },
  methods: {
    initialScreen() {
      url = 'https://reisapi.ruter.no/StopVisit/GetDepartures/3012130?datetime=017-02-03T13:18&transporttypes=Metro&linenames=5'
      axios.get(url, {responseType: 'blob'})
        .then(function (response) {
          console.log(JSON.stringify(response))
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  mounted() {
    this.initialScreen()
  }
})
