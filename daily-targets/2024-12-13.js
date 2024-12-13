module.exports = `
<p><p>
<style>
  * {
    background: var(--b, #61A74E);
    * {
      --b: #FADE8B;
      border-radius: 9in;
      margin: 30px 110px 90px;
      padding: 30px 0px;
      p {
        --b: #61A74E;
        margin: 0 70px;
        height: 60px;
      }
      p + p {
        position: fixed;
        height: 0;
        width: 180px;
        margin: 15px 0;
        --b: #FADE8B;
        border-radius: 9in 0;
        rotate: 30deg;
      }
    }
  }
</style>
`;
