module.exports = `
<p a><i></i></p><p b><i></i></p><p a><i></i></p>
<style>	
  body {
  	margin: 0 50px;
    background: #62306D;
  }
  p {
    display: inline-block;
    width: 100px;
    height: 100px;
    background: #F7EC7D;
  }
  i {
    display: block;
    width: 60px;
    height: 60px;
    background: #E38F66;
    border: solid 20px #AA445F;
    border-radius: 50%;
    margin-top: -50px;
  }
  [a]{
    margin-top: 200px;
  }
  [b]{
    height: 200px;
  }
  [b] > i {
    background: #AA445F;
    border: solid 20px #E38F66;
  }
</style>
`
