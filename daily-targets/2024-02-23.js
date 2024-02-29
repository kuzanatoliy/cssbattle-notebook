module.exports = `
<p><p><p><p><p><p>
<style>
  * {
    background: var(--b, #3C1B4A);
    margin: 0;
    border-radius: var(--r);
  }
  p {
    position: fixed;
    --b: #FCDDEB;
    height: 20px;
    width: 250px;
    top: 75px;
    left: 90px;
    --r: 9in 9in 0 0;
    & + p {
      height: 99px;
      width: 20px;
      left: 320px;
      --r: 0 9in 9in 0;
      & + p {
        height: 20px;
        width: 150px;
        top: 154px;
        left: 190px;
        --r: 9in 0;
        & + p {
          width: 20px;
          height: 200px;
          & + p {
            height: 30px;
            left: 60px;
            --r: 0;
            top: 70px;
            & + p {
              top: 60px;
              left: 70px;
              height: 50px;
              width: 70px;
              --r: 0 10px 10px 0;
              --b: #9364C8;
            }
          }
        }
      }
    }
  }
</style>
`;
