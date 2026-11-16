module.exports = `
<style>
  * {
    background: #F3AC3C;
    border: solid var(--b, 5vw) #998235;
    border-bottom: 0;
    border-radius: 9in 9in 0 0;
    margin: 60px 110px 150px;
    * {
      --b: 30px;
      margin: 15px 30px;
      position: relative;
      top: 55px;
      scale: -1;
      clip-path: polygon(50% 100%, 100% 0, 0 0);
    }
  }
</style>
`;
