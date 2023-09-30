module.exports = `
<p><p b><p a>
<style>
* {
  background: var(--b, #0D1335);
}
* * {
  border-radius: 50%;
  margin: 130px 180px;
  --b: #73C6EA;
}
p {
  position: fixed;
  --b: none;
  inset: 95px 75px;
  margin: 0;
  border: solid 10px var(--c, #FBFAE2);
}
[a] {
  rotate: 60deg;
  --c: #DC6638;
}
[b] {
  rotate: -60deg;
  --c: #4FA07B;
}
</style>
`;
