module.exports = `
<p><p a><p b><p><p><p>
<style>
  * {
    background: #A5B5B4;
    border-radius: 50%;
  }
  body {
    background: #FFF;
    margin: 60px 125px;
    padding: 10px;
  }
  p {
    background: #000;
    margin: 10px 45px;
    height: 10px;
    width: 10px;
    -webkit-box-reflect: right var(--r, 20px);
  }
  [a] {
    margin-left: 60px;
    --r: -10px;
  }
  [b] {
    height: 30px;
    width: 30px;
    margin: -10px 15px 20px;
    --r: 40px;
  }
</style>
`;
