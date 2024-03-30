module.exports = `
<p s><a><p><a><p s><a><p s><a></a><dl><a></a><dl>
<style>
  * {
    background: var(--b, #071945);
    * {
      margin: 40px 20px 0;
    }
    p {
      width: 50px;
      float: left;
      height: 10px;
      --b: #B069F7;
      margin: 0 20px;
    }
    a {
      position: relative;
      display: block;
      width: 10px;
      height: 10px;
      inset: -30px;
      -webkit-box-reflect: right 50px;
    }
    [s], [s] a {
      box-shadow: 0 50px #F8DA37;
    }
    dl {
      position: fixed;
      width: 10px;
      height: 30px;
      bottom: 0;
      left: 175px;
      --b: #2CE1EA;
      & a {
        inset: -70px -20px;
        -webkit-box-reflect: above 5vw;
      }
      & dl {
        clip-path: polygon(50% 0, 100% 100%, 0 100%);
        width: 40px;
        height: 20px;
        left: 160px;
      }
    }
  }
</style>
`;
