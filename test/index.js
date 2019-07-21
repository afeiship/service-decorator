@service(['test1', 'test2', 'test-obj'])
class App {
  start() {
    console.log(this.$test1);
    console.log(this.$test2);
    console.log(this.$testObj);
  }
}

// app start:
const app = new App();
app.start();
