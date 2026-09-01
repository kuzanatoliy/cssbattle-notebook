module.exports = `
<p><p a><p><dl>
<style>
  * {
    background: #BADE37;
    body {
      border: solid 30px #333;
      border-radius: 9in;
      margin: 60px 110px;
      padding: 10px 0;
      [a] {
        rotate: 90deg;
      }
      * {
        height: 20px;
        margin: 10px -30px;
        & + dl {
          position: fixed;
          padding: 20px;
          top: 110px;
        }
      }
    }
  }
</style>
`;
