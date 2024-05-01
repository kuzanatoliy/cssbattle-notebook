module.exports = `
<p><dl><p><dl>
<style>
  * {
    background: var(--b, #4F77FF);
    border-radius: 9in;
    margin: 0;
    body {
      margin: 50px 100px;
      --b: #1038BF;
      padding: 30px;
    }
    p {
      --b: #4F77FF;
      position: fixed;
      height: 90px;
      width: 30px;
      top: 20px;
      left: 185px;
    }
    dl {
      --b: linear-gradient(#4F77FF 52px, 0, #1038BF);
      height: 58px;
      overflow: hidden;
      padding: 82px 0 0;
      & p {
        top: 140px;
        height: 20px;
        width: 20px;
        left: 190px;
      }
      & dl {
        height: 100px;
        border-radius: 0 10px;
        --b: #4F77FF;
        width: 56px;
        -webkit-box-reflect: right 30px;
      }
    }
  }
</style>
`;
