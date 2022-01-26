module.exports = `
<p><p b><p c>
<style>
  html {
    background: #0B2429;
  }
  body {
    margin: 75px;
  }
  p {
    margin: 0;
    width: 150px;
    height: 150px;
    float: left;
    border-radius: 65% 0;
    background: #1A4341;
  }
  [b] {
    background: #998235;
  }
  [c] {
    background: #F3AC3C;
  }
  p + p {
    margin-left: -100px;
  }
</style>
`
