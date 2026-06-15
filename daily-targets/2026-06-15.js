module.exports = `
<p><p><dl><dl>
<style>
  * {
    background: #2D696F;
    body {
      margin: 50px 100px;
      background: #81A5A9;
      border-radius: 9in;
      dl {
        background: radial-gradient(#2D696F 15px, 0, #81A5A9);
        inset: 34px 70vh 144px 25vw;
        * {
          inset: 40vw 25vw 50px 70vh;
        }
      }
      * {
        position: fixed;
        inset: 124px 0;
        & + p {
          rotate: 90deg;
        }
      }
    }
  }
</style>
`;
