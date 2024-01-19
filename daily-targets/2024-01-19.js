module.exports = `
<p><p><p>
<style>
  * {
    background: var(--b, #551D70);
  }
  * * {
    margin: 70px 160px;
    border-radius: 0 0 9in 9in;
    --b: linear-gradient(#7E6BB7 110px, 0, #E6E7E8);
  }
  p {
    margin: 0;
    position: fixed;
    width: 100px;
    height: 20px;
    border-radius: 9in;
    top: 70px;
    left: 150px;
    --b: #E6E7E8;
    & + p {
      width: 20px;
      top: 120px;
      left: 170px;
      & + p {
        width: 10px;
        height: 10px;
        top: 150px;
        left: 190px;
      }
    }
  }
</style>
`;
