module.exports = `
<p><p><p>
<style>
  * {
    background: #352939;
    * {
      background: #FADE8B;
      margin: 145px 100px;
      rotate: 45deg;
      * {
        margin: 0;
        height: 10px;
        rotate: 90deg;
        & + * {
          background: #A76DFF;
          position: fixed;
          rotate: 45deg;
          padding: 35px 40px;
          margin: 8px 7px;
          border-radius: 9in 9in 0 0;
          -webkit-box-reflect: above 70px;
          & + * {
            rotate: 135deg;
            top: -96px;
          }
        }
      }
    }
  }
</style>
`;
