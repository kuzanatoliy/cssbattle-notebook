module.exports = `
<p><p a><p>
<style>
  * {
    background: #555FD9;
    margin: 25px -5px;
    [a] {
      --w: 40px;
    }
    p {
      margin: 0;
      float: left;
      padding: 80px 50px;
      border: solid #F2A842;
      border-width: 20px var(--w, 0);
      & + p {
        margin: 0 0 0 20px;
      }
    }
  }
</style>
`;
