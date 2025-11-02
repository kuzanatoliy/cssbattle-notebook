module.exports = `
<p><p c><p><p c s><p><p c s><dl>
<style>
  * {
    background: #F5D6B4;
    * {
      position: relative;
      margin: 100px 80px;
      [c] {
        --c: #D86F45;
        z-index: 1;
      }
      [s] {
        scale: -1;
      }
      p {
        border: solid 5vw var(--c, #F5D6B4);
        border-bottom: none;
        float: left;
        margin: 0 -10px;
        padding: 15px 30px;
        border-radius: 9in 9in 0 0;
        & + dl {
          width: 20px;
          height: 20px;
          color: #D86F45;
          box-shadow: 50vh 40px, -30vh 40px;
          border-radius: 9in
        }
      }
    }
  }
</style>
`;
