module.exports = `
<p l><p r><p c><p r><p><p><p l><p><dl>
<style>
  * * {
    background: #6592CF;
    margin: 35px;
    [l] {
      margin-left: 115px;
    }
    [r] {
      margin-right: 60px;
    }
    [c] {
      margin-left: 25px;
    }
    p {
      float: left;
      padding: 15px;
      background: #282342;
      border-radius: 9in;
      margin: 20px 20px 30px;
      & + dl {
        position: fixed;
        inset: 35px 130px;
        color: #6592CF;
        box-shadow: 90px 80px, -90px 80px;
      }
    }
  }
</style>
`;
