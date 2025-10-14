module.exports = `
<p><p>
<style>
  html {
    background: #F2F2B6;
    p {
      position: absolute;
      border: solid 75px rgba(0,0,0,0);
      top: 69px;
      left: 60px;
      border-top: solid 130px var(--b, #FF6D00);
      filter: drop-shadow(5vw 0 var(--s, #FD4602));
      & + p {
        top: -6px;
        left: 170px;
        scale: 1 -1;
        --b: #FD4602;
        --s: #FF6D00;
      }
    }
  }
</style>
`;
