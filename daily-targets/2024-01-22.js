module.exports = `
<dl><p><p>
<style>
  * {
    background: var(--b, #024817);
    margin: 0;
    border-radius: 9in;
  }
  body {
    --b: #088540;
    margin: 50px 125px 100px;
  }
  dl {
    --b: #83CF9D;
    position: fixed;
    width: 20px;
    height: 300px;
    inset: 95px 190px;
    & p {
      position: fixed;
      inset: 110px 208px;
      height: 70px;
      width: 20px;
      rotate: 45deg;
      & + p {
        rotate: -45deg;
        inset: 110px 172px;
      }
    }
  }
</style>
`;
