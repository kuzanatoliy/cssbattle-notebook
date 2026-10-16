module.exports = `
<p><p><p><dl>
<style>
  * * {
    background: #F3EAD2;
    color: #D96C7B;
    * {
      background: #4C455B;
      position: fixed;
      margin: 0;
    }
    p {
      padding: 30px 10px;
      top: 0;
      left: 90px;
      box-shadow: 30px 0;
      & + p {
        left: 260px;
        & + p {
          top: 160px;
          left: 175px;
          & + * {
            padding: 55px 110px;
            top: 70px;
            left: 90px;
            border-radius: 0 0 9in 9in;
          }
        }
      }
    }
  }
</style>
`;
