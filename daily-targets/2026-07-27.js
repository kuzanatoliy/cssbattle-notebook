module.exports = `
<dl><dl><dl><dl><dl><dl><dl>
<style>
  * {
    background: #3450AE;
    * {
      background: #22D16A;
      height: 20px;
      position: relative;
      margin: 80px 60px;
      * {
        margin: 0 20px 0 30px;
        top: 40px;
        * * * {
          background: #3450AE;
          top: -120px;
          width: 10px;
          height: 140px;
          left: -100px;
          * {
            left: 0;
            top: 0;
            * * {
              width: 20px;
            }
          }
        }
      }
    }
  }
</style>
`;
