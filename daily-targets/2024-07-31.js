module.exports = `
<p a><p><p>
<style>
  * {
    background: #EDAF38;
    body {
      background: #7F7F24;
      margin: 50px 90px 90px 50px;
    }
    margin: 0;
    p {
      position: fixed;
      height: 120px;
      width: 220px;
    }
    [a] {
      clip-path: polygon(0 0, 100% 0, 0 100%);
    }
    p + p {
      width: 40px;
      height: 40px;
      color: #7F7F24;
      box-shadow: 65vw 30vw, 55vw 40vw;
      & + p {
        width: 60px;
        height: 60px;
        border-radius: 9in;
        color: #FFFFCD;
        box-shadow: 25vw 20vw, 45vw 20vw;
      }
    }
  }
</style>
`;
