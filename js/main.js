function insert(num) {
  document.form.textView.value = document.form.textView.value + num;
}
function clean() {
  document.form.textView.value = "";
}
function equals() {
  let res = document.form.textView.value;
  if (res) {
    document.form.textView.value = eval(res);
  }
}
function ac() {
  let ac = document.form.textView.value;
  document.form.textView.value = ac.substring(0, ac.length - 1);
}
