module.exports = `
<p><dl><p><dl><p>
<style>
  * {
    background: var(--b, #373794);
    * {
      --b: #F3AC3C;
      margin: 87px 155px 130px;
      border-radius: var(--r, 9in 9in 0 0);
    }
    p, dl {
      position: fixed;
      --b: #0E0E39;
      height: 47px;
      margin: 0 5px;
      width: 80px;
      scale: -1;
      top: 170px;
    }
    dl {
      margin: 0 18px;
      --b: #F3AC3C;
      width: 54px;
      height: 58px;
      & > p {
        --b: #FFFFFF;
        --r: 9in;
        height: 20px;
        width: 50px;
        top: 18px;
        margin: 0 7px;
        width: 40px;
      }
      dl {
        --b: #0E0E39;
        --r: 0 71px 0 100px;
        width: 100px;
        top: 51px;
        left: 9px;
        height: 70px;
        -webkit-box-reflect: right;
        & > p {
          --r: 0 9in;
          top: 39px;
          left: 58px;
          width: 30px;
        }
      }
    }
  }
</style>
`;
