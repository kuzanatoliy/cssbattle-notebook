module.exports = `
<p a><p><p b>
<style>
  * {
    background: #3A335A;
    * {
      margin: 65px -22px;
      [a] {
        margin-top: 2px;
        rotate: 15deg
      }
      [b] {
        margin-top: 2px;
        rotate: -15deg;
      }
      p {
        float: left;
        padding: 90px 70px;
        margin: 0 4px;
        transform-origin: 50% 0;
        background: repeating-linear-gradient(#FFF 0px, #FFF 30px, 0, #3A335A 70px);
      }
    }
  }
</style>
`;
