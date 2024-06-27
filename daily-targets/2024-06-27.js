module.exports = `
<p><p><dl>
<style>
  * {
    background: #EA7457;
    margin: 0;
    p, dl {
      position: fixed;
    }
    p {
      background: #B53733;
      inset: 140px 0;
    }
    p + p {
      rotate: 90deg;
    }
    dl {
      color: #B53733;
      width: 100px;
      height: 100px;
      box-shadow: 50vh 0, 50vh 50vw, 0 25vw, 75vw 25vw;
    }
  }
</style>
`;
