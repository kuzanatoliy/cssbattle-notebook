module.exports = `
<p><p>
<style>
  * {
    background: #325853;
    body {
      background: #D99795;
      margin: 80px 155px 110px;
      * {
        position: relative;
        border-radius: 0 9in 9in 0;
        width: 25px;
        height: 50px;
        top: 14px;
        float: left;
        -webkit-box-reflect: var(--r, right 40px);
        & + p {
          left: 75px;
          background: #D8D8D8;
          --r: left 110px;
        }
      }
    }
  }
</style>
`;
