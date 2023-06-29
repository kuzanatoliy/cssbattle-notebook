module.exports = `
<p c><p b r><p a r>
<style>
  * {
    background: #4F77FF;
  }
  p {
    width: 100px;
    height: 100px;
    background: #1038BF;
    position: fixed;
  }
  [a] {
    top: 34px;
    left: 150px;
  }
  [b] {
    top: 104px;
    left: 195px;
    -webkit-box-reflect: left -10px;
    box-shadow: 10px 40px #4F77FF;
  }
  [c] {
    top: 134px;
    left: 145px;
  }
  [r] {
    border-radius: 99q;
  }
</style>
`;
