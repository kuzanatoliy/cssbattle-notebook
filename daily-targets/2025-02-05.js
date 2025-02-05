module.exports = `
<dl><p></dl><dl><p><div>
<style>
  * {
    background: #BFE33A;
    margin: 0;
    color: #5A9F48;
    * * {
      background: none;
      position: fixed;
    }
    dl {
      height: 150px;
      box-shadow: 20px 0;
      width: 380px;
      p {
        height: 80px;
        top: 150px;
        width: 160px;
        left: 180px;
        border-radius: 0 0 9in 9in;
        border: solid 40px;
        border-top: none;
      }
      & + dl {
        scale: -1;
        margin: 150px 20px 0;
      }
    }
    div {
      background: #BFE33A;
      inset: 130px 40px -19px;
    }
  }
</style>
`;
