module.exports = `
<dl><p t><p><p t><p a>
<style>
  * {
    background: #D9D9D9;
    body {
      border-radius: 0 0 9in 9in;
      margin: 60px 150px;
      border: solid #222;
      border-width: 0 20px 120px;
      [t] {
        margin-top: 20px;
      }
      dl {
        background: #222;
        position: fixed;
        top: 44px;
        left: 50px;
        -webkit-box-reflect: right 25vw;
        [a] {
          position: fixed;
          left: 140px;
          top: 150px;
          padding: 5px 15px;
          rotate: 15deg;
        }
        p {
          padding: 20px 10px;
          margin: 0;
          float: left;
          & + p {
            margin-left: 20px;
          }
        }
      }
    }
  }
</style>
`;
