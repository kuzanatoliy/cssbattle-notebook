module.exports = `
<p><p>
<style>
  * {
    background: #61A74E;
    body {
      -webkit-box-reflect: right -20px;
    }
    * {
      border: solid 20px #FFF;
      margin: 30px 190px 30px 30px;
      p {
        float: left;
        margin: 50px 0 50px -20px;
        width: 20px;
        height: 60px;
      }
      p + p {
        position: relative;
        border-radius: 9in;
        width: 40px;
        height: 40px;
        left: 90px;
        top: 10px;
      }
    }
  }
</style>
`;
