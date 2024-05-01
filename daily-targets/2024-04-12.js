module.exports = `
<p><p><dl a><dl>
<style>
  * {
    background: #EA7457;
    * {
      background: #B53733;
      margin: 60px 95px;
    }
    p {
      position: fixed;
      height: 30px;
      width: 100px;
      top: 0;
      left: -100px;
      z-index: 1;
    }
    p + p {
      left: 210px;
      top: 150px;
    }
    [a] {
      -webkit-box-reflect: right 20vh;
    }
    dl {
      outline: solid 5vh #EA7457;
      margin: 0;
      height: 90px;
      width: 75px;
      padding: 45px 0;
      & dl {
        height: 0;
        width: 30px;
      }
    }
  }
</style>
`;
