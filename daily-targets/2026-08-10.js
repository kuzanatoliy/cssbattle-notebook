module.exports = `
<p><p><p><p a><p a>
<style>
  * * {
    background: #F3AC3C;
    margin: 130px 35px;
    p {
      background: radial-gradient(circle, #144650 35px, 0, #F3AC3C);
      float: left;
      padding: 20px 35px;
      margin: 0 20px;
      & + [a] {
        position: fixed;
        padding: 35px;
        left: -10px;
        top: -35px;
        -webkit-box-reflect: right 60vw;
        & + * {
          top: 265px
        }
      }
    }
  }
</style>
`;
