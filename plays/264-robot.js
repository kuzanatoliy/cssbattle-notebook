module.exports = `
<p><p><p><p><p><p><p><p><p><p>
<style>
  * * {
    background: #EEB850;
    margin: 50px 100px;
    p {
      position: fixed;
      border: solid 5vw #394257;
      padding: 20px;
      background: #EEB850;
      border-radius: 9in;
      top: 0;
      left: 30px;
      & + p {
        top: 30px;
        left: 120px;
        & + p {
          top: 90px;
          left: 0;
          & + p {
            top: 120px;
            left: 90px;
            & + p {
              top: 40px;
              left: 60px;
              border: 0;
              border-radius: 0;
              padding: 20px 15px;
              & + p {
                top: 120px;
                left: 110px;
                & + p {
                  top: 60px;
                  left: 120px;
                  padding: 15px 20px;
                  & + p {
                    top: 110px;
                    left: 40px;
                    & + p {
                      top: 90px;
                      background: #394257;
                      padding: 10px 60px;
                      & + p {
                        rotate: 90deg;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
`;
