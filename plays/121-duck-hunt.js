module.exports = `
<p>
<style>
  * {
    background: var(--b, linear-gradient(#1E92FF 45vw, 0, #69D10A 55vw, 0, #6F6100));
    * {
      --b: #441A0A;
      margin: 100px 330px 120px 50px;
    }
    p {
      height: 40px;
      width: 40px;
      position: relative;
      border-radius: 9in;
      top: -20px;
      left: -80px;
      --b: #69D10A;
      color: #69D10A;
      box-shadow: 5vw 0, 10vw 0, 5vw -5vw, 290px 50px, 290px 70px;
    }
  }
</style>
`;
