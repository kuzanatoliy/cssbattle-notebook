module.exports = `
<p><dl>
<style>
  * {
    background: #23384B;
    border: solid #F0CD48;
    border-width: var(--w, 0 20px);
    margin: 120px 90px 80px;
    * {
      margin: 0 40px 80px;
      p {
        position: fixed;
        --w: 0;
        inset: 140px 110px 30px;
        background: #F0CD48;
        border-radius: 0 0 9in 9in;
        & + dl {
          position: fixed;
          inset: 80px 190px 100px 50px;
          --w: 20px 20px 0 20px;
          border-radius: 9in 9in 0 0;
          -webkit-box-reflect: right 60px;
        }
      }
    }
  }
</style>
`;
