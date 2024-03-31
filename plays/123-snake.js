module.exports = `
<p>
<style>
  * {
    background: var(--b, #C74E4E);
    * {
      --b: #E0E246;
      color: #E0E246;
      margin: 90px 190px 190px;
      border-radius: 5px;
      box-shadow: 25px 0, 50px 0, 75px 0, 25vw 0, 25vw 25px, 25vw 50px, 25vw 75px, 25px 25vw, 50px 25vw, 75px 25vw, 25vw 25vw, 0 25vw, -25px 25vw, -50px 25vw, -75px 25vw, -25vw 25vw;
    }
    p {
      width: 20px;
      height: 20px;
      margin: 0;
      position: fixed;
      --b: #FFFFFF;
      border-radius: 9in;
      left: 90px;
      box-shadow: none;
    }
  }
</style>
`;
