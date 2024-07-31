module.exports = `
<dl><dl><dl><dl><dl a><dl><dl><dl><dl>
<style>
  * {
    background: #B53733;
    * {
      margin: -10px 30px;
      dl {
        background: #EA7457;
        position: relative;
        width: 20px;
        height: 150px;
        margin: 0;
        & dl {
          inset: 40px;
        }
      }
      [a] dl {
        top: -40px;
      }
    }
  }
</style>
`;
