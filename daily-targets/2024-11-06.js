module.exports = `
<p><p a><p b><p a><p>
<style>
  * {
    background: var(--b, #0B2429);
    * {
      margin: 50px 70px;
      p {
        --b: #F3AC3C;
        height: 70px;
        width: 100px;
        margin: 0 80px;
        float: left;
      }
      [a] {
        margin: -5px 0;
      }
      [b] {
        --b: #998235;
        margin: -5px;
        border-radius: 9in;
        width: 70px;
      }
    }
  }
</style>
`;
