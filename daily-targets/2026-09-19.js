module.exports = `
<p><p>
<style>
  * {
    background: #485993;
    body {
      background: #FFA173;
      margin: 25px 75px;
      border-radius: 9in;
      padding: 5px 25px;
      p {
        height: 80px;
        margin: 0;
        clip-path: polygon(10px 100%, 50% 30px, 190px 100%);
        & + p {
          clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0, 190px 0, 50% 50px, 10px 0);
        }
      }
    }
  }
</style>
`;
