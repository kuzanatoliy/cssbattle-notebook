module.exports = `
<a></a><dl><p><p t><p>
<style>
  * {
    background: var(--b, #000);
    body {
      margin: 110px 80px;
    }
    dl {
      --b: n;
      position: fixed;
      margin: 0;
      inset: 60px 50px;
    }
    p {
      height: 20px;
      margin: 30px 0;
      --b: #AF067C;
      border-radius: 9in;
    }
    [t] {
      rotate: -4deg;
    }
    a {
      width: 20px;
      height: 40px;
      display: block;
      --b: #fff;
      color: #fff;
      box-shadow: 55vw 0, 55vw 10vw, 110px 10vw;
    }
  }
</style>
`;
