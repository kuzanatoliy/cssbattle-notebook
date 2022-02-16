module.exports = `
<p a><p b><p c>
<style>
  * {
    margin: 0;
    position: absolute;
  }
  body {
    background: #222730;
  }
  p {
    background: #4CAAB3;
    height: 150px;
  }
  [a] {
    width: 400px;
    top: 75px;
  }
  [b] {
    width: 150px;
    transform: rotate(45deg);
    margin: 75px 125px;
    box-shadow:0+0+0+50px#222730;
  }
  [c] {
    height: 50px;
    width: 50px;
    background: #393E46;
    border-radius: 50%;
    margin: 125px 175px;
  }
</style>
`;
