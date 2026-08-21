module.exports = `
<p><p>
<style>
  * {
    background: #3157B4;
    * {
      background: #84BE8D;
      margin: 110px 100px;
      * {
        position: fixed;
        padding: 85px 35px 0;
        top: -85px;
        left: 200px;
        border-radius: 9in 0 0;
        -webkit-box-reflect: left 50vw;
        & + * {
          top: 80px;
          scale: 1 -1;
        }
      }
    }
  }
</style>
`;
