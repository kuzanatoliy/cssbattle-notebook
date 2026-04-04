module.exports = `
<p>
<style>
  html {
    background: #50EEB4;
    color: #0B7B52;
    margin: 20px 34px 20px 210px;
    * {
      background: repeating-linear-gradient(90deg, #FFF 0, #FFF 24px, 0, #50EEB4 44px);
      margin: 0;
      -webkit-box-reflect: var(--r, left 5vw);
      p {
        width: 24px;
        height: 24px;
        box-shadow: 0 125q, 44px 89q, 93q 53q, 132px 17q;
        --r: below 212px;
      }
    }
  }
</style>
`;
