module.exports = `
<div><dl><dl><dl><dl><dl><dl>
<style>
  * {
    background: #E3516E;
    border-radius: 9in;
    body {
      margin: 70px 140px;
    }
    div {
      overflow: hidden;
    }
    dl {
      background: #FADE8B;
      height: 160px;
      width: 160px;
      outline: solid 10px #E3516E;
      position: relative;
      margin: 0;
      top: -5px;
      left: -20px;
      dl {
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        top: 25px;
        left: 20px;
      }
    }
  }
</style>
`;
