module.exports = `
<dl><p></dl><div><p><p><p><p><p><p><p>
<style>
  * {
    background: #4F77FF;
    body {
      margin: 35px 65px;
    }
    p {
      background: #FFF;
    }
    div {
      position: fixed;
      margin: -146px -40px;
      & > p {
        height: 30px;
        width: 30px;
        margin: 0 10px;
        border-radius: 9in;
        float: left;
      }
    }
    dl {
      width: 115px;
      -webkit-box-reflect: right 10vw;
      & > p {
        height: 230px;
        clip-path: polygon(0 0, 100% 50%, 0 100%);
      }
    }
  }
</style>
`;
