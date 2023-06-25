module.exports = `
<div><nav></div><p><p>
<style>
  * {
    background: #293462;
  }
  div {
    width: 150px;
    height: 100px;
    background: #A64942;
    margin: 110px 117px;
    top: 110px;
    left: 125px;
    border-radius: 50px;
    overflow: hidden;
  }
  p {
    position: fixed;
    background: #293462;
    width: 10px;
    height: 10px;
    top: 144px;
    left: 185px;
    border-radius: 20q;
    -webkit-box-reflect: right 10px;
  }
  p + p {
    border: solid 10px #FFF1C1;
    box-shadow: 0 0 0 10px #FE5F55;
    top: 79px;
    left: 150px;
    -webkit-box-reflect: right 40px;
  }
  nav {
    background: #FE5F55;
    width: 300px;
    height: 200px;
    border-radius: 50%;
    margin: -130px -70px;
  }
</style>
`;
