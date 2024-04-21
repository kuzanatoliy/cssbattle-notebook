module.exports = `
<dl><p>
<style>
  * {
    background: var(--b, #301E53);
    body, dl {
      border-radius: 9in 9in 0 0;
    }
    * {
      --b: #766D94;
      margin: 100px 180px 0;
    }
    dl {
      position: fixed;
      height: 200px;
      width: 100px;
      margin: -100px -140px;
      scale: -1;
      --b: #A6A0BE;
      -webkit-box-reflect: left 30vw;
    }
    p {
      height: 100px;
      --b: #301E53;
      margin: 100px 40px;
      width: 60px;
    }
  }
</style>
`;
