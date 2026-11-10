module.exports = `
<dl a><dl><p><p>
<style>
  * {
    background: #A98955;
    [a], p {
      background: #373737;
    }
    * {
      background: #FFF;
      margin: 195px 70px 75px 140px;
      border-radius: 9in 0 0 9in;
      * {
        position: relative;
        margin: 0 0 0 20px;
        top: -40px;
        * * {
          padding: 15px;
          & + p {
            position: fixed;
            padding: 75px 15px;
            border-radius: 9in;
            top: 75px;
            left: 320px;
          }
        }
      }
    }
  }
</style>
`;
