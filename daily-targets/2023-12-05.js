module.exports = `
<p><p a r><p><p b r><p b r>
<style>
  * {
    background: #004563;
  }
  body {
    background: #D4EFFC;
    margin: 45px 95px;
  }
  p {
    position: relative;
    height: 30px;
    margin: 30px;
    top: 30px;
  }
  [a] {
    width: 60px;
  }
  [r] {
    -webkit-box-reflect: right 10vh;
  }
  [b] {
    position: fixed;
    width: 30px;
    top: 15px;
    left: 125px;
  }
  [b] + [b] {
    top: 195px;
  }
</style>
`;
