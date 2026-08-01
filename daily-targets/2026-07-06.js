module.exports = `
<p><p a><p>
<style>
  * {
    background: #998235;
    body {
      background: #F3EAD2;
      margin: 70px 30px;
      [a] {
        margin: 0;
        height: 80px;
        --r: 65vw;
      }
      p {
        height: 40px;
        width: 40px;
        margin: 0 0 0 40px;
        -webkit-box-reflect: right var(--r, 45vw);
      }
    }
  }
</style>
`;
