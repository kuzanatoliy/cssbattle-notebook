module.exports = `
<p><p><dl>
<style>
  * {
    background: var(--b, #F3EAD2);
    body {
      margin: 80px 149px;
      scale: -1 1;
      p {
        margin: 0;
        height: 140px;
        width: 42px;
        --b: #D96C7B;
        transform: skew(var(--d, 20deg), 0);
        float: left;
      }
      p + p {
        --d: -20deg;
        margin-left: 18px;
        --b: #8F3F4A;
      }
      dl {
        position: fixed;
        height: 20px;
        width: 500px;
        --b: #8F3F4A;
        margin: 45px -160px;
        box-shadow: 0 10px #F3EAD2;
      }
    }
  }
</style>
`;
