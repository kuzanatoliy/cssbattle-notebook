module.exports = `
<p>
<style>
  * {
    background: var(--b, #FBD6C1);
    * {
      --b: linear-gradient(90deg, #D62022 50%, 0, #F16B4A);
      border-radius: 9in;
      margin: 90px 125px 60px;
      box-shadow: 0 -75px 0 -45px;
    }
    p {
      position: relative;
      height: 20px;
      width: 20px;
      --b: #000;
      margin: 25px;
      top: 35px;
      box-shadow: 5vh 10vh, 5vh 20vh;
      -webkit-box-reflect: right 60px;
    }
  }
</style>
`;
