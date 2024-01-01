module.exports = `
<p><dl>
<style>
  * {
    background: var(--b, #14313E);
  }
  body {
    margin: 90px 125px 75px;
  }
  dl {
    height: 100%;
    --b: repeating-linear-gradient(0deg, #BD3F4C 0px, #BD3F4C 16q, 0, #F16348 37q);
    clip-path: polygon(0 100%, 50% 0, 100% 100%);
  }
  p {
    position: fixed;
    height: 30px;
    width: 30px;
    --b: #F16348;
    border-radius: 9in;
    margin: -15px 60px;
  }
</style>
`;
