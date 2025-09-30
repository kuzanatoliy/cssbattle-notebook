module.exports = `
<p><p><p><p><p>
<style>
  * {
    background: #00D47E;
    margin: 10px;
    p {
      margin: 0;
      background: #23384B;
      float: left;
      padding: 20px;
      -webkit-box-reflect: below 60vh;
      & + p {
        margin-left: 40px;
        box-shadow: -40px 40px #23384B;
      }
    }
  }
</style>
`;
