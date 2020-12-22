


let arrNames = ['Sol','Mol','Gol']
let eqachName = arrNames.map((item,index)=><li className= {index==0? 'first':index==1? 'second':index==2&&'third'} key={index}>{item}</li>)

let congrats = ['Congragulations!', 'React is awesome']
const text = (
<div className="card">
<h1>Hello</h1>
<ol>
{eqachName}
</ol>

<div>
  <h2>{congrats[0]}</h2>
  <h3>{congrats[1]}</h3>
</div>
</div>

)





ReactDOM.render(
  text , document.querySelector('#example')
)
  
  