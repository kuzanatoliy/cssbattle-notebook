module.exports = `
<p>
<style>
  * {
    background: var(--b, #D5EDFC);
    * {
      --b: #06487A;
      border-radius: 9in;
      margin: 95px 100px 175px;
    }
    p {
      position: fixed;
      height: 80px;
      width: 160px;
      border-radius: 0 0 9in 9in;
      margin: 30px 20px;
      --b: radial-gradient(circle at 50% 0, #06487A 5vw, 0, #D5EDFC 50px, 0, #06487A);
    }
  }
</style>
`;
