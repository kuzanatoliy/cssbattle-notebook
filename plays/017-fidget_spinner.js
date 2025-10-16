module.exports = `
<p><p><p>
<style>
  * {
    background: var(--b, #09042A);
    position: fixed;
    p {
      padding: 27px 50px;
      top: 110px;
      left: 150px;
      --b: #E78481;
      border-radius: 9in;
      & + p {
        padding: 30px;
        top: 41px;
        left: 160px;
        color: #09042A;
        border: solid 10px;
        -webkit-box-reflect: var(--r, below 26px);
        --b: #F5BB9C;
        & + p {
          left: 100px;
          top: 94px;
          color: #E78481;
          --b: #09042A;
          --r: right 40px;
        }
      }
    }
  }
</style>
`;
