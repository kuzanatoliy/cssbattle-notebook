module.exports = `
<p><p>
<style>
  * {
    background: #E3516E;
    * {
      color: #66284A;
      border: double 60px;
      margin: 30px;
      p {
        position: fixed;
        border: solid 40px;
        margin: -60px;
        -webkit-box-reflect: right 45vw;
        & + p {
          top: 250px;
        }
      }
    }
  }
</style>
`;
