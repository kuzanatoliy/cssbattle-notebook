module.exports = `
<p><p a><p><p><p a>
<style>
  * * {
    background: #A84A4B;
    margin: 110px 40px;
    p {
      background: #F5E3B5;
      float: left;
      padding: 65px 10px;
      margin: 0;
      &[a] {
        border-radius: 0 9in 9in 0;
        padding: 40px;
        & + p {
          border-radius: 9in;
          padding: 40px;
          margin: 0 20px;
        }
      }
    }
  }
</style>
`;
