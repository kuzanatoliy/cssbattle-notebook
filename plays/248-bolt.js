module.exports = `
<p>
<style>
  * {
    border-radius: var(--r, 9in);
  }
  html {
    background: #FFF;
    border: solid 5vw #444;
    margin: 25px 75px;
    body {
      background: #444;
      margin: 20px 35px;
      clip-path: polygon(0 0, 100% 0, 100% 41%, 50% 100%, 0 41%);
      * {
        height: 20px;
        width: 50px;
        --r: 0;
        color: #FFF;
        box-shadow: 0 70px, 0 25vw, 0 130px;
        -webkit-box-reflect: right 40px;
      }
    }
  }
</style>
`;
