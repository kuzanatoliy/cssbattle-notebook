module.exports = `
<p><p a><p a><p><p d><p d>
<style>
  * {
    background: #6592CF;
    body {
      background: #A8D38B;
      margin: 20px 50px;
      [d] {
        position: fixed;
        background: #3F3642;
        border-radius: 9in 0 0 9in;
        padding: 30px 15px;
        margin: 0;
        left: 20px;
        -webkit-box-reflect: right 75vw;
        & + * {
          top: 220px;
        }
      }
      p {
        float: left;
        padding: 70px 20px;
        margin: 60px 0;
        & + p {
          margin-left: 60px;
          &[a]{
            padding: 100px 10px;
            & + [a] {
              margin-top: 0;
            }
          }
        }
      }
    }
  }
</style>
`;
