module.exports = `
<p><p a><p b><p b a><p c>
<style>
  * {
    background: #FFF;
    * {
      background: #4B4D88;
      margin: 230px 74px 40px;
      border-radius: 9in;
      p {
        position: fixed;
        height: 30px;
        width: 60px;
        margin: 0;
        inset: 67px 102px;
        rotate: 45deg;
      }
      [a] {
        top: 167px;
      }
      [b] {
        rotate: -45deg;
        left: 238px;
      }
      [c] {
        rotate: 90deg;
        margin: 68px;
      }
    }
  }
</style>
`;
