module.exports = `
<p><p><p><p>
<style>
  * {
    background: #6255AA;
    margin: 0;
    * {
      margin: 0 20px;
      p {
        background: #D96E9F;
        height: 120px;
        width: 120px;
        margin: 0 30px;
        float: left;
        clip-path: polygon(0 100%, 76% 0, 100% 30%, 100% 100%);
        & + p {
          scale: -1 1;
          & + p {
            margin-top: 60px;
            scale: 1 -1;
            & + p {
              scale: -1;
            }
          }
        }
      }
    }
  }
</style>
`;
