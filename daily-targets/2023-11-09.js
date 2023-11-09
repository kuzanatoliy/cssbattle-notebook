module.exports = `
<p><p><p>
<style>
  * {
    background: #D0AF50;
  }
  * * {
    background: linear-gradient(#D0AF50 60px, 0, #8C292A 100px, 0, #D0AF50 120px, 0, #8C292A);
    margin: 50px 120px;
    border-radius: var(--r, 0 0 9in 9in);
  }
  p {
    --r: 9in;
    width: 40px;
    height: 40px;
    float: left;
    margin: 0;
    background: #8C292A;
  }
  p + p {
    margin-left: 20px;
  }
</style>
`;
