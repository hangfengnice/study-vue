function foo() {
  console.log('foo');
}
try {
  console.log('helo');
  return foo()
} finally {
  console.log('ye');
}
