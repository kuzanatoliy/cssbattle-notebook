module.exports = `
<p><p><dl><div><dl>
<style>
  * {
    background: #F59426;
    margin: 0;
    position: fixed;
    dl, div {
      aspect-ratio: 1 / 1;
    }
    p, dl {
      border-radius: 9in;
    }
    p, div {
      background: #FFF;
    }
    p {
      height: 250px;
      width: 50px;
      margin: 25px 175px;
    }
    p + p {
      rotate: 90deg;
    }
    dl {
      margin: 75px 125px;
      width: 150px;
      & * {
        margin: 25px;  
      }
    }
    div {
      width: 100px;
      & > dl {
        width: 50px;
      }
    }
  }
</style>
`;
