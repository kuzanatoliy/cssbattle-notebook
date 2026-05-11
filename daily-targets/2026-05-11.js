module.exports = `
<p><dl>
<style>
  html {
    background: FFF;
    * {
      position: fixed;
      p {
        border-radius: 0 0 9in 9in;
        margin: 10px;
        background: #B53733;
        inset: 35vh 40px 85px 40vw;
        & + * {
          border-radius: 9in;
          border: solid 20px;
          inset: 44px 170px 44px 50px;
        }
      }
    }
  }
</style>
`;
