module.exports = `
<p a><p><p><p a b><p><p>
<style>
  * {
    background: #2D3464;
    * {
      background: #F7EC7D;
      margin: 135px 80px;
      [a] {
        height: 90px;
      }
      [b] {
        top: 5px;
        left: 190px;
        & + p {
          top: 95px;
          left: 130px;
          & + p {
            top: 95px;
            left: 250px;
          }
        }
      }
      p {
        position: fixed;
        top: -115px;
        left: 0;
        padding: 25px;
        border-radius: 9in;
        & + p {
          left: 60px;
          & + p {
            left: -60px;
          }
        }
      }
    }
  }
</style>
`;
