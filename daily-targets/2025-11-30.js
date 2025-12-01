module.exports = `
<p><p a><p b><p a><p>
<style>
  * {
    background: #E38F66;
    margin: 0;
    body {
      display: flex;
      align-items: center;
      [a] {
        rotate: 45deg;
        padding: 35px
      }
      [b] {
        padding: 70px;
      }
      p {
        background: #F7F3D7;
        padding: 35px 30px;
      }
    }
  }
</style>
`;
