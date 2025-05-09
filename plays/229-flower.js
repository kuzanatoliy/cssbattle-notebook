module.exports = `
<dl><p>
<style>
  * {
    background: #F4DCBF;
    * {
      background: #D95362;
      margin: 135px 185px;
      -webkit-box-reflect: var(--d) 30px;
      dl {
        background: #F4DCBF;
        position: fixed;
        inset: -40vh -60px 30px;
        --d: below;
        p {
          width: 60px;
          height: 120px;
          margin: 0;
          border-radius: 0 9in;
          --d: right;
        }
      }
    }
  }
</style>
`;
