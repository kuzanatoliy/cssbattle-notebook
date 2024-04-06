module.exports = `
<p><p>
<style>
  * {
    background: #E3516E;
    body {
      margin: 100px 120px;
      clip-path: polygon(0 0, 100% 0, 70% 50%, 100% 100%, 0 100%, 30% 50%);
    }
    p {
      height: 40px;
      background: #D9D9D9;
      margin: 20px 0;
      width: 70px;
      border-radius: 0 9in 9in;
      -webkit-box-reflect: right 5vw;
    }
    p + p {
      scale: 1 -1;
    }
  }
</style>
`;
