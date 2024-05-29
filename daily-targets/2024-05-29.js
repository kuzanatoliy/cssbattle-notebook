module.exports = `
<div r><dl><dl></div><div><dl><dl>
<style>
  * {
    background: #4F77FF;
    border-radius: 9in;
    body {
      margin: 100px 80px;
    }
    div {
      background: #FFF;
      height: 92px;
      width: 20px;
      float: left;
      padding: 4px 40px;
      & + div {
        margin-left: 40px;
      }
    }
    dl {
      height: 60px;
      & dl {
        rotate: 90deg;
      }
    }
    [r] {
      rotate: 45deg;
    }
  }
</style>
`;
