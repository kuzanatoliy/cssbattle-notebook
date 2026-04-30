module.exports = `
<p a><p><p a>
<style>
  * {
    background: #DDFEE6;
    * {
      position: fixed;
      background: #6D62BA;
      border-radius: 9in 9in 0 0;
      padding: 90px 50px;
      margin: 0;
      top: 60px;
      left: 110px;
      [a] {
        rotate: 90deg;
      }
      * {
        left: 150px;
        top: 100px;
        & + p {
          background: #A1E6E4;
          padding: 60px 20px;
          top: 90px;
          left: 140px;
          & + p {
            top: 130px;
            left: 180px;
          }
        }
      }
    }
  }
</style>
`;
