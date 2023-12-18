module.exports = `
<p><p><p>
<style>
  * {
    background: linear-gradient(#F19E4B 25vw, 0, #FFF 50vw, 0, #3F8627);
  }
  body {
    background: radial-gradient(#00007B 10px, 0, #FFF 30px, 0, #00007B);
    border-radius: 9in;
    margin: 110px 160px;
  }
  p {
    background: #00007B;
    position: fixed;
    width: 4px;
    height: 70px;
    inset: 100px 198px;
  }
  p + p {
    rotate: 60deg;
  }
  p + p + p {
    rotate: 120deg;
  }
</style>
`;
