module.exports = `
<p><p>
<style>
  * {
    background: #EAC049;
    * {
      border: solid 20px #51A499;
      margin: 60px 110px;
      p {
        position: fixed;
        margin: -60px;
        padding: 10px;
        -webkit-box-reflect: right 35vw;
        & + p {
          top: 280px;
        }
      }
    }
  }
</style>
`;
