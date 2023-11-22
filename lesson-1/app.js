const app = Vue.createApp({
  // template: "<h2> I am a template</h2>",
  data() {
    return {
      showBooks: true,
      title: "The Final Empire",
      author: "Ron Jacob Varghese",
      age: 20,
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent() {
      console.log("event");
    },
  },
});

app.mount("#app");
