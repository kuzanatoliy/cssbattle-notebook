module.exports = `
<p><p><dl>
<style>
  * {
    margin: 0;
    background: #E8AD6D;
    * {
      position: fixed;
      background: #FFF;
      color: #A84A4B;
      border-block: solid 30px;
      inset: 5vw 185px;
      & + p {
        rotate: 90deg;
        & + dl {
          inset: 40px 90px;
          border: solid 5vw;
          background: 0;
          border-radius: 9in;
          overflow: hidden;
        }
      }
    }
  }
</style>
`;
