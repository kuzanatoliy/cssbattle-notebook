module.exports = `
<dl><p>
<style>
  * {
    background: #F2EAA8;
    body {
      background: #EE7667;
      margin: 50px 100px;
      border-radius: 9in;
      * {
        margin: 0 90px;
        outline: solid 20px #F2EAA8;
        height: 200px;
        background: linear-gradient(#EE7667 var(--l, 80px), 0, #F2EAA8 var(--r, 120px), 0, #EE7667);
        p {
          margin: 0;
          rotate: 90deg;
          --l: 70px;
          --r: 130px;
          outline-width: 10px;
        }
      }
    }
  }
</style>
`;
