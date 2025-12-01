module.exports = `
<dl a><dl><dl a>
<style>
  [a] {
    --b: #81D2B0;
  }
  * {
    background: var(--b, #FFF8EA);
    * {
      --b: #DA6C8E;
      border-radius: 9in;
      margin: 90px 210px 160px 70px;
      * {
        margin: 0;
        height: 50px;
        transform-origin: 130px 60px;
        rotate: 90deg;
      }
    }
  }
</style>
`;
