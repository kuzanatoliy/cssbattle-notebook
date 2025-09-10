module.exports = `
<p>
<style>
  html, p {
    rotate: 45deg;
  }
  * {
    color: #B0C1F0;
    background: #B0C1F0;
    border: solid 30px #3E5AA9;
    margin: 20px 70px;
    * {
      margin: 10px;
      p {
        position: fixed;
        inset: 0 80px;
        border-width: 10px;
        box-shadow: 40vw 0 0 25vw, -40vw 0 0 25vw; 
      }
    }
  }
</style>
`;
