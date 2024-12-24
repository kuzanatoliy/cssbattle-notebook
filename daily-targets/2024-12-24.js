module.exports = `
<p><p>
<style>
  * {
    background: #6D62BA;
    * {
      background: #A1E6E4;
    }
    body {
      margin: 105px 155px;
      border-radius: 9in;
      p {
        position: fixed;
        width: 90px;
        height: 30px;
        margin: -60px 0;
        -webkit-box-reflect: below 50vh;
      }
      p + p {
        rotate: 90deg;
        margin: 30px 90px;
      }
    }
  }
</style>
`;
