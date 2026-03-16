module.exports = `
<dl><div><p><p></dl><dl>
<style>
  html {
    background: #4C455B;
    * {
      margin: 70px 120px;
      dl {
        height: 80px;
        margin: 40px 0;
        color: #F5E3B5;
        box-shadow: 0 -40px, 0 40px, 40px 0;
        & + dl {
          height: 40px;
          scale: -1;
        }
        div {
          -webkit-box-reflect: right -80px;
          p {
            background: #8AB8B6;
            position: fixed;
            padding: 30px;
            top: 10px;
            left: 20px;
            rotate: 45deg;
            border-radius: 9in 0 9in 9in;
            & + p {
              top: 30px;
              left: 40px;
              padding: 10px;
              background: #4C455B;
              border-radius: 9in;          
            }
          }
        }
      }
    }
  }
</style>
`;
