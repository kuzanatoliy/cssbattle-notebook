module.exports = `
<p a><p b><p a t>
<style>
  * {
    background: #7E6293;
    * {
      margin: 50px 75px;
      [a] {
        border: solid 30px #FFF;
        padding: 30px 15px;
        border-radius: 9in;
      }
      [b] {
        background: #FFF;
        transform: skew(-15deg, 0);
        margin: 0 20px;
      }
      [t] {
        margin-top: 80px;
      }
      p {
        margin: 0;
        float: left;
        padding: 100px 15px;
      }
    }
  }
</style>
`;
