module.exports = `
<p><p><p><p>
<style>
  * {
    background: var(--b, #000);
  }
  * * {
    --b: #D4392D;
    margin: 70px 195px 100px;
  }
  p {
    position: fixed;
    margin: 20px -75px;
    height: 120px;
    width: 100px;
    border-radius: 50%;
    rotate: -30deg;
  }
  p + p {
    margin: 20px -15px;
    rotate: 30deg;
    & + p {
      --b: #000;
      height: 60px;
      width: 50px;
      margin: 30px -95px;
      & + p {
        margin: 70px -95px;
      }
    }
  }
</style>
`;
