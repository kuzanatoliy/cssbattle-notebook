module.exports = `
<p><p><dl>
<style>
  * {
    background: var(--b, #CF6939);
    * {
      margin: 25px 100px;
      p {
        float: left;
        border-bottom: solid 60px #2A272F;
        margin: 60px 0;
        --b: #FFF;
        padding: 65px;
        border-radius: 9in 0 0;
        & + p {
          margin: 0 -60px;
          scale: -1;
          & + dl {
            position: fixed;
            --b: #2A272F;
            inset: 60px 70px;
          }
        }
      }
    }
  }
</style>
`;
