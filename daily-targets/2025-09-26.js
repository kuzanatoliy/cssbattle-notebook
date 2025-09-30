module.exports = `
<p><p><p><p>
<style>
  * {
    background: #4763B1;
    margin: 15px 40px;
    * {
      p {
        float: left;
        padding: 40px;
        background: #FFF;
        margin: 20px;
        box-shadow: 0 -20px;
        & + p {
          rotate: 90deg;
          & + p {
            rotate: 270deg;
            & + p {
              rotate: 180deg;
            }
          }
        }
      }
    }
  }
</style>
`;
