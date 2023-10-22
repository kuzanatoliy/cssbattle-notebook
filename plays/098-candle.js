module.exports = `
<p><dl><dl><dl a><dl b>
<style>
  * {
    position: relative;
    background: var(--b, #14313E);
  }
  body {
    margin: 125px 160px 75px;
  }
  * * {
    --b: #BA3E46;
  }
  dl {
    border-radius: 50%;
    height: 30px;
    top: 85px;
  }
  dl dl {
    --b: #F3695A;
    top: -100px;
  }
  [a] {
    margin-inline: 10px;
    --b: #14313E;
    top: -10px;
  }
  [b] {
    margin-left: 50%;
    border-radius: 9in 0 9in 0;
    height: 50px;
    --b: #F3AC3C;
    top: -40px;
  }
</style>
`;
