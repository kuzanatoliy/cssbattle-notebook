module.exports = `
<div><dl><p></dl><dl><p></dl></div><div><dl><p></dl><dl><p></dl></div><div><dl><p></dl><dl><p></dl></div>
<style>
  * {
    background: var(--b, #F59426);
    body {
      margin: 90px 160px;
    }
    div, dl, p {
      height: 100%;
    }
    div {
      --b: none;
      position: fixed;
      height: 120px;
      width: 80px;
      margin: -16px 0;
      transform-origin: 50% 100%;
      & + div {
        rotate: 45deg;
        & p {
          --b: #FFF;
        }
        & + div {
          rotate: -45deg;
        }
      }
    }
    dl + dl {
      position: relative;
      top: -136px;
      scale: -1;
    }
    p {
      --b: #FAC992;
      border-radius: 0 9in 9in 0;
      clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
    }
  }
</style>
`;
