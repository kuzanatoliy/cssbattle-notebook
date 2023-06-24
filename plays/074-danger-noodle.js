module.exports = `
<p a>
<p b>
<p c>
<p d>
<p e>
<p f></p>
<span g></span>
<span h></span>
<style>
  body {
    background: #191919;
  }
  p, :after {
    content: '';
    display: block;
    box-sizing: border-box;
  }
  p {
    margin: 0;
    position: absolute;
    width: 70px;
    border: 5px solid #E08027;
  }
  p:after {
    width: 100%;
    height: 100%;
    border: inherit;
  }
  p:nth-child(odd){
    padding: 0 10px 10px;
    bottom: 40px;
    border-radius: 0 0 50q 50q;
    border-top: none;
  }
   p:nth-child(even){
    padding: 10px 10px 0;
    top: 40px;
    border-radius: 50q 50q 0 0;
    border-bottom: none;
  }
  p:nth-child(1n):after{
    border-radius: inherit;
    border: inherit;
  }
  [a] {
    height: 70px;
    top: 90px;
    left: -35px;
  }
  [b] {
    height: 70px;
    left: 15px;
  }
  [c] {
    height: 150px;
    left: 65px;
  }
  [d] {
    height: 150px;
    left: 115px;
  }
  [e] {
    height: 70px;
    left: 165px;
  }
  [f] {
    width: 65px;
    height: 80px;
    left: 215px;
    top: 140px !important;
    border-radius: 35px 0 0 0 !important;
    border-right: none;
  }
  [f]:after {
    border-radius: 20px 0 0 0 !important;
    border-right: none;
  }
  [g] {
    position: absolute;
    background: #E08027;
    width: 50px;
    height: 30px;
    border-radius: 14px 20px 20px 14px;
    top: 135px;
    left: 265px;
  }
  [h] {
    position: absolute;
    background: #191919;
    width: 10px;
    height: 10px;
    border-radius: 20px;
    top: 137px;
    left: 295px;
    -webkit-box-reflect: below 6px;
  }
</style>
`;
