module.exports = `
<p><p>
<style>
  * * {
    background: #62306D;
    border: solid #FFF 25vw;
    margin: 30px 60px 130px;
    border-bottom: none;
    border-radius: 9in 9in 0 0;
    p {
      position: fixed;
      border-radius: 0;
      inset: 35vw 75vw -25vw -30vw;
      transform: skew(-38.5deg, 0);
      border-width: 20px 26px;
      & + p {
        inset: 35vw -30vw -25vw 75vw;
        transform: skew(38.5deg, 0);
      }
    }
  }
</style>
`;
