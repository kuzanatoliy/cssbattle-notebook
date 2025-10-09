module.exports = `
<p>
<style>
  * {
    background: #4CAAB3;
    margin: 75px 0;
    box-shadow: 0 0 0 var(--s, 75px) #222730;
    * {
      margin: 0 125px;
      border-width: 50px;
      rotate: 45deg;
      --s: 50px;
      padding: 50px;
      * {
        --s: 0;
        padding: 25px;
        margin: 0;
        background: #393E46;
        border-radius: 9in;
      }
    }
  }
</style>
`;
