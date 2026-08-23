module.exports = `
<p><p>
<style>
  * {
    background: #F3AC3C;
    border: solid 5vw;
    margin: 75px 90px;
    * {
      position: fixed;
    }
    body {
      border-radius: 5vw;
      top: -30px;
      left: 60px;
      padding: 5px 30px;
      p {
        border-width: 10px;
        padding: 0 10px;
        top: 65px;
        left: 70px;
        -webkit-box-reflect: left 5vw;
        & + p {
          left: 170px;
        }
      }
    }
  } 
</style>
`;
