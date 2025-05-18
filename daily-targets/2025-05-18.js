module.exports = `
<p><p>
<style>
  * {
    background: #F3EAD2;
    * {
      background: #C0D6E7;
      margin: 114px 130px;
      p {
        position: fixed;
        background: #D96C7B;
        padding: 25px 75px;
        margin: 0 0 0 -10px;
        transform-origin: var(--o, 100%) 0;
        rotate: -45deg;
        & + p {
          margin: 1px 0 0 -1px;
          background: #4C455B;
          --o: 0;
          rotate: 45deg;
        }
      }
    }
  }
</style>
`;
