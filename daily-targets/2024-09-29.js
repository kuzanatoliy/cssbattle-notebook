module.exports = `
<p><p>
<style>
  * {
    background: #F0F0F0;
    * {
      background: red;
      margin: 50px 150px;
      p {
        margin: 0;
        height: 100px;
        --b: #E05947;
        background: repeating-linear-gradient(var(--b), var(--b) 20px, 0, #F0F0F0 40px);
      }
      p + p {
        --b: #EAC049;
        rotate: 90deg;
      }
    }
  }
</style>
`;
