module.exports = `
<p><p>
<style>
  * {
    background: #F2EAA8;
    * {
      margin: 40px 35px;
      p {
        background: #EE7667;
        height: 40px;
        width: 90px;
        -webkit-box-reflect: right var(--r, 50vh);
        margin: 0;
        box-shadow: 0 var(--s, 45vw) #84BE8D;
        & + p {
          margin: 0 25px;
          height: 50px;
          width: 40px;
          --r: 50vw;
          --s: 90px;
        }
      }
    }
  }
</style>
`;
