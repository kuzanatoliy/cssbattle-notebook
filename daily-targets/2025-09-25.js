module.exports = `
<p><p><dl>
<style>
  * {
    background: #B0C1F0;
    * {
      background: #FAE29E;
      margin: 50px 100px;
      padding: 20px;
      p {
        border-radius: 9in;
        clip-path: polygon(0 35px, 0 100%, 55px 100%, 55px 90px);
      }
      * {
        position: fixed;
        margin: 0;
        background: #3E5AA9;
        padding: 80px;
        & + * {
          rotate: 180deg;
          & + * {
            padding: 40px;
            margin: 40px;
          }
        }
      }
    }
  }
</style>
`;
