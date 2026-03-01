module.exports = `
<p><p>
<style>
  * {
    background: #AC778B;
    border: solid #FFF;
    border-width: 0 20px 0 0;
    margin: 0 190px 0 0;
    body {
      -webkit-box-reflect: right 75vw;
    }
    * {
      border-width: 20px;
      position: fixed;
      padding: 30px;
      border-radius: 30px;
      left: -50px;
      top: 20px;
      p {
        top: 180px;
        & + p {
          left: 150px;
          top: 100px;
        }
      }
    }
  }
</style>
`;
