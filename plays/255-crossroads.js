module.exports = `
<dl><dl><dl><dl><dl><dl><dl><dl><p><p>
<style>
  * {
    background: #469DBA;
    margin: 10px 35px;
    * * {
      margin: 0;
      position: fixed;
      border: solid #F5E3B5;
      border-width: 0 20px 20px 0;
      padding: 50px;
      * {
        rotate: 90deg;
        transform-origin: 130px var(--y, 80px);
        * * * {
          padding: 35px;
          * {
            --y: 95px;
            p {
              margin: 70px -70px;
              border: 0;
              padding: 25px;
              & + p {
                margin: 140px -140px;
              }
            }
          }
        }
      }
    }
  }
</style>
`;
