module.exports = `
<p><p a><p>
<style>
  * {
    background: var(--b, #4C455B);
    * {
      --b: #8AB8B6;
      margin: 50px 60px;
      height: 200px;
      [a] {
        height: 140px;
      }
      p {
        --b: #F3EAD2;
        height: 20px;
        position: relative;
        margin: 0 200px 30px 20px;
        top: -20px;
        -webkit-box-reflect: right 30vw;
      }
    }
  }
</style>
`;
