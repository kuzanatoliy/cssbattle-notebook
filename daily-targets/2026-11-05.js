module.exports = `
<dl><p>
<style>
  * {
    background: #F2D66C;
    * {
      border: solid 10px #4A9A86;
      background: #EBF6F0;
      margin: 100px 150px;
      * {
        position: relative;
        margin: 5px;
        * {
          left: 50px;
          height: 20px;
          border-width: 10px 0;
          margin: 5px 0;
        }
      }
      dl {
        left: -115px;
        height: 50px;
        -webkit-box-reflect: right 40vw;
      }
    }
  }
</style>
`;
