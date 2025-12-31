module.exports = `
<p r><p y r><p c r><p y><p c><p>
<style>
  * {
    background: #45B45B;
    body {
      border-radius: 5vw;
    }
    * {
      background: #194247;
      margin: 60px 70px;
      padding: 10px;
      [r] {
        border-radius: 9in;
      }
      [y] {
        background: #FABC0D;
      }
      [c] {
        background: #E3473C;
      }
      p {
        background: #45B45B;
        margin: 0 10px 20px 0;
        float: left;
        & + p + p + p {
          margin: 0 0 10px 160px;
          width: 60px;
          & + p {
            margin-left: 120px;
            width: 100px;
            & + p {
              margin-left: 80px;
              width: 140px;
            }
          }
        }
      }
    }
  }
</style>
`;
