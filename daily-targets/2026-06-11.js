module.exports = `
<p><p a><p><p><p><p>
<style>
  body {
    background: #55C085;
    margin: 90px 5q 90px 217q;
    -webkit-box-reflect: left 10q;
    [a] {
      background: #FFF;
    }
    p {
      float: left;
      padding: 55px 10px;
      background: #333;
      margin: 5px;
      & + p {
        padding: 55px 20px;
        & + p {
          padding: 10px 50px;
        }
      }
    }
  }
</style>
`;
