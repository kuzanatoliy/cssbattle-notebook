module.exports = `
<dl><dl><dl><dl><dl>
<style>
  * {
    background: #000;
    body {
      margin: 75px 50px;
      background: linear-gradient(105deg, #E96A23 120px, 0, #EBAE11 170px, 0, #E96A23 184px, 0, #EBAE11 209px, 0, #E96A23);
      padding: 15px
    }
    dl {
      position: fixed;
      inset: 74px 80px;
      border-radius: 12px;
      & > dl {
        inset: 89px 65px;
        & > dl {
          inset: 89px 95px;
          box-shadow: inset 0 0 0 var(--s, 5px) #EBAE11;
          border-radius: 50%;
          & > dl {
            inset: 99px 135px;
            & > dl {
              inset: 109px 175px;
              --s: 25px;
            }
          }
        }
      }
    }
  }
</style>
`;
