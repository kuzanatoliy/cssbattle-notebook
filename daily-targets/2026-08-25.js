module.exports = `
<p><p><p><p>
<style>
  * {
    background: #3E6D43;
    * {
      background: #E5CA72;
      margin: 25px 75px;
      * {
        position: fixed;
        inset: 100px -15px;
        background: linear-gradient(90deg, #3E6D43 85px, 0, #E5CA72 115px, 0, #3E6D43 125px, 0, #E5CA72 155px, 0, #3E6D43 165px, 0, #E5CA72 195px, 0, #3E6D43);
        & + * {
          rotate: 90deg;
          & + * {
            position: fixed;
            inset-block: 110px;
            background: #E5CA72;
            & + * {
              rotate: 0deg;
            }
          }
        }
      }
    }
  }
</style>
`;
