module.exports = `
<p><p>
<style>
  * {
    background: #E25C57;
    margin: 0;
    p {
      & + p {
        scale: -1;
        margin: 0 200px 0 0; 
      }
      margin:0 0 0 200px;
      height: 150px;
      background: repeating-linear-gradient(#F4DA64 0, #F4DA64 30px, 0, #E25C57 50px);
    }
  }
</style>
`;
