module.exports = `
<dl><dl r><p></dl></dl><dl s><dl r><p></dl></dl><div>
<style>
  * {
    color: #F5E3B5;
    background: #469DBA;
    [r] {
      -webkit-box-reflect: right 5vw;
    }
    [s] {
      scale: 1 -1;
    }
    * {
      margin: 20px 50px;
      div {
        background: blue;
        position: fixed;
        padding: 25px;
        margin: 0;
        box-shadow: 90px -210px, 160px -140px;
        color: #469DBA;
        height: 0;
      }
      * {
        margin: 20px;
        height: 120px;
        * {
          border: solid;
          border-width: 0 20px 20px 0;
          height: 100px;
          margin: 0;
          width: 100px;
          * {
            width: 70px;
            height: 70px;
          }
        }
      }
    }
  }
</style>
`;
