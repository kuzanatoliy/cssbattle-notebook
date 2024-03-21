module.exports = `
<dl><p></dl><p>
<style>
  * {
    background: var(--b, #301E53);
    * {
      margin: 75px 50px;
    }
    * * {
      margin: 0;
      --b: #A6A0BE;
    }
    p {
      outline: solid 10px #301E53;
    }
    dl {
      height: 100%;
      clip-path: polygon(0 0, 100% 0, 50% 100%);
      p {
        height: 40px;
        --b: #766D94;
      }
      & + p {
        position: fixed;
        height: 50px;
        width: 70px;
        top: 125px;
        left: 75px;
        -webkit-box-reflect: right 110px;
      }
    }
  }
</style>
`;
