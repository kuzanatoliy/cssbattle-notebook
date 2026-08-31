module.exports = `
<p><p a><p b><p a><p>
<style>
  * * {
    background: #94B31F;
    margin: 10px;
    [a] {
      border-radius: 9in;
      margin: 10px 5px;
      padding: 15px;
      background: #FFF;
      --r: 50vw;
    }
    [b] {
      height: 230px;
    }
    p {
      float: left;
      background: #5F5F1E;
      padding: 25px 50px;
      margin: 0;
      -webkit-box-reflect: below var(--r, 45vw);
    }
  }
</style>
`;
