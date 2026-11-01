module.exports = `
<style>
  * {
    background: #84B9C7;
    color: #ECD5E4;
    body {
      border: solid 30px;
      margin: 40px 90px;
      p {
        float: left;
        background: #1D5260;
        padding: 30px;
        margin: 0;
        border-radius: 0 0 9in;
        & + p {
          margin: 40px 0 0 100px;
          scale: -1;
          & + * {
            margin: 0;
            position: fixed;
            inset: 135px 185px;
            box-shadow: 115px 95px, 115px -95px, 95px 115px, 95px -115px;
            -webkit-box-reflect: left -30px;
          }
        }
      }
    }
  }
</style>
`;
