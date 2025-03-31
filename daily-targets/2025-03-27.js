module.exports = `
<p r><p><dl><p>
<style>
  * {
    background: var(--b, #282828);
    * {
      margin: 65px 130px;
      [r] {
        border-radius: 9in;
        color: #EA3323;
        box-shadow: 20px 0 0 -10px, 45px 0 0 -5px, 80px 0;
      }
      p {
        padding: 15px;
        margin: 0 110px 0 0;
        & + p {
          --b: #F2A73B;
          padding: 30px;
          rotate: 45deg;
          margin: 25px 0 0 107px;
        }
      }
      dl {
        position: fixed;
        inset: 5vh 0;
        --b: #FFF;
        border-radius: 20px;
        padding: 30px 0 0 105px;
        p {
          --b: #282828;
          padding: 30px 15px 0 0;
          border-radius: 50%;
        }
      }
    }
  }
</style>
`;
