module.exports = `
<p><p><p a>
<style>
  * {
    background: var(--b, #73C6EA);
    margin: 20px 25px;
  }
  p {
    position: fixed;
    width: 250px;
    height: 180px;
    --b: #0D1335;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
    bottom: 40px;
  }
  p + p {
    height: 140px;
    --b: #DC6638;
  }
  [a] {
    height: 100px;
    --b: #FBFAE2;
  }
</style>
`;
