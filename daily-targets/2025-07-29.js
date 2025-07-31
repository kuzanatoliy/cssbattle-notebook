module.exports = `
<p t><p><p>
<style>
  * {
    background: #D94E4E;
    [t] {
      border-top: 0;
    }
    p {
      position: fixed;
      border: solid 30px #010201;
      inset: 144px 45px 54px;
      & + p {
        border-width: 50px;
        inset: -20px 150px;
        & + p {
          border: solid 30px #FEFF58;
          border-radius: 9in;
          inset: -161px 75px 159px;
        }
      }
    }
  }
</style>
`;
