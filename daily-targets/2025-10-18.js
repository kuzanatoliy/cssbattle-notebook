module.exports = `
<p><p>
<style>
  * {
    margin: 0;
    body {
      background: #FFEA9B;
      p {
        color: #4A9A86;
        float: left;
        padding: 15px 50px;
        box-shadow: 30px 30px, 60px 60px, 90px 90px;
        -webkit-box-reflect: right var(--r, 50vw);
        & + p {
          padding: 90px 15px;
          box-shadow: 85px 90px;
          --r: 35vw;
        }
      }
    }
  }
</style>
`;
