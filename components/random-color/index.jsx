export default function RandomColor(){

    function handleRandomColor() {
      const randomNumR = Math.random()*100;  
      const randomNumG = Math.random()*100;  
      const randomNumB = Math.random()*100;  
      const color = "#" + randomNumR + randomNumG + randomNumB;
    }

    return 
    <div className="container" style="background-color: {{color}}">
        <button onClick={handleRandomColor()}>Generate Random Color</button>

        {color}
    </div>
}