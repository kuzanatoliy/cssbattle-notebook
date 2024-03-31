module.exports = `
<p><p><p c><p b><p><p><p b><p a><p b><p a><p><p><p a><p c><p><p>
<style>
  * {
    background: var(--b, #EAEB8D);
    * {
      margin: 50px 100px;
    }
  }
  p {
    margin: 0;
    float: left;
    width: 25%;
    height: 25%;
  }
  [a] {
    --b: #F48B26;
  }
  [b] {
    --b: #F9B125;
  }
  [c] {
    box-shadow: inset 0 0 0 10px #FECE22;
  }
</style>
`;
