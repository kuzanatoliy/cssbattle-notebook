module.exports = `
<p><p><p>
<style>
  * * {
    background: #2F2F2F;
    border-radius: var(--r, 0 9in 9in 0);
    margin: 20px;
    p {
      border: solid #D9D9D9;
      border-width: var(--w, 60px 60px 60px 0);
      float: left;
      padding: 20px 80px;
      margin: 0 20px 0 0;
      & + p {
        --w: 0 0 0 60px;
        padding: 50px;
        & + p {
          --w: 0 0 60px 60px;
          --r: 0 0 0 9in;
          padding: 20px 129px;
          margin: 0 -120px;
        }
      }
    }
  }
</style>
`;
