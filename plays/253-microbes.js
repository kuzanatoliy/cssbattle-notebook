module.exports = `
<p><p><dl>
<style>
  * {
    background: #CC8984;
    * {
      margin: 25px 75px;
      color: #66312E;
      p {
        border: solid;
        margin: 0;
        border-width: 40px 0 0 40px;
        height: 85px;
        width: 85px;
        border-radius: 9in 0 0;
        & + p {
          margin-left: 125px;
          scale: -1;
          & + dl {
            border-radius: 9in;
            background: red;
            height: 40px;
            width: 40px;
            box-shadow: 30px -275px, 30px -65px, 45vh -170px, -75px -170px;
          }
        }
      }
    }
  }
</style>
`;
