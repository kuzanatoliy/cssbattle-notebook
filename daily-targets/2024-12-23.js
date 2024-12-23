module.exports = `
<p><p>
<style>
  * {
    background: #3F4869;
    * {
      background: #F4DA64;
      margin: 0 260px 0 80px;
      p {
        position: fixed;
        margin: 45px 0;
        height: 70px;
        width: 320px;
        transform: skewY(var(--s, -30deg));
      }
      p + p {
        --s: 30deg;
        margin: 185px 0;
      }
    }
  }
</style>
`;
