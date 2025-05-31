module.exports = `
<p a><p>
<style>
  * {
    background: #6592CF;
    * {
      background: repeating-linear-gradient(#6592CF 0px, #6592CF 30px, 0, #EEB850 25vw);
      margin: -15px 110px;
      [a] {
        margin: 25px 55px 0;
        --r: below 30vw;
      }
      p {
        background: #EEB850;
        float: left;
        padding: 40px 35px;
        margin: 20px 0;
        -webkit-box-reflect: var(--r, right 40px);
      }
    }
  }
</style>
`;
