module.exports = `
<p><p><dl>
<style>
  * {
    background: #3F4869;
    * {
      background: #61A74E;
      border-radius: 50%;
      margin: 42px 108px;
      dl, p {
        position: fixed;
      }
      p {
        width: 40px;
        height: 60px;
        background: #242A42;
        margin: 106px 22px;
        rotate: -51deg;
      }
      p + p {
        margin-left: 121px;
        rotate: 51deg;
      }
      dl {
        height: 90px;
        width: 90px;
        border-radius: 100% 0 40px;
        margin: 140px 47px;
        rotate: 45deg;
      }
    }
  }
</style>
`;
