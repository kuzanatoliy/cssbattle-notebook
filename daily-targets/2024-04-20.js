module.exports = `
<div><dl><dl></div><div><dl><dl>
<style>
  * {
    margin: 0;
    background: #EA7457;
    div {
      height: 50%;
    }
    dl {
      aspect-ratio: 1 / 1;
      height: 100%;
      background: #B53733;
      box-shadow: 75px 0 #B53733;
      outline: solid 25px #EA7457;
      & dl {
        height: 75px;
      }
    }
    div + div {
      scale: -1;
    }
  }
</style>
`;
