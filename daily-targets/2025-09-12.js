module.exports = `
<p><p><dl><dl><dl><dl><dl><dl><dl><p>
<style>
  html {
    background: #D24444;
    border: solid 5vw #F3DA7A;
    margin: 15px 65px;
    border-radius: 9in;
    * {
      background: #F3DA7A;
      margin: 0 105px 210px;
      p {
        position: fixed;
        inset: 80px 85px -70px;
        & + p {
          inset: 35vw 25px -70px 85px;
        }
      }
      dl {
        margin: 0;
        height: 20px;
        transform-origin: 50% 115px;
        rotate: 45deg;
      }
    }
  }
</style>
`;
