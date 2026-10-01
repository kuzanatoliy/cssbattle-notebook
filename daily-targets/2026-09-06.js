module.exports = `
<p a><p><p b><p>
<style>
  * * {
    margin: 90px 20px;
    [a] {
      rotate: -15deg;
    }
    [b] {
      rotate: 15deg;
      & + p {
        position: fixed;
        padding: 50px 10px;
        background: #FFF;
        inset: 0 175px;
      }
    }
    p {
      float: left;
      padding: 45px;
      background: #6D57C4;
      margin: 15px;
      border-radius: 10px;
    }
  }
</style>
`;
