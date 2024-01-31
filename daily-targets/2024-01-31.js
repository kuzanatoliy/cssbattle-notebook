module.exports = `
<dl a><dl><dl a><dl>
<style>
  * {
    background: #0D2328;
    margin: 0;
  }
  body {
    margin: 25px 75px;
  }
  dl {
    height: calc(100% - 50px);
    border-radius: 9in;
    padding: 25px;
  }
  [a] {
    background: linear-gradient(90deg, #23A440 50%, 0, #80CDF6 100%);
    & [a] {
      scale: -1;
    }
  }
</style>
`;
