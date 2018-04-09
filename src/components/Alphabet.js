import React, { Component } from 'react';


class Alphabet extends Component {
 render() {
   return (
     <div className="Alphabet">
         <button onClick={ this.toggleEdit }>a</button>
         <button onClick={ this.toggleEdit }>b</button>
         <button onClick={ this.toggleEdit }>c</button>
         <button onClick={ this.toggleEdit }>d</button>
         <button onClick={ this.toggleEdit }>e</button>
         <button onClick={ this.toggleEdit }>f</button>
         <button onClick={ this.toggleEdit }>g</button>
         <button onClick={ this.toggleEdit }>h</button>
         <button onClick={ this.toggleEdit }>i</button>
         <button onClick={ this.toggleEdit }>j</button><br/>
         <button onClick={ this.toggleEdit }>k</button>
         <button onClick={ this.toggleEdit }>l</button>
         <button onClick={ this.toggleEdit }>m</button>
         <button onClick={ this.toggleEdit }>n</button>
         <button onClick={ this.toggleEdit }>o</button><br/>
         <button onClick={ this.toggleEdit }>p</button>
         <button onClick={ this.toggleEdit }>q</button>
         <button onClick={ this.toggleEdit }>r</button>
         <button onClick={ this.toggleEdit }>s</button>
         <button onClick={ this.toggleEdit }>t</button>
         <button onClick={ this.toggleEdit }>u</button>
         <button onClick={ this.toggleEdit }>v</button>
         <button onClick={ this.toggleEdit }>w</button>
         <button onClick={ this.toggleEdit }>x</button>
         <button onClick={ this.toggleEdit }>y</button>
         <button onClick={ this.toggleEdit }>z</button><br/>
         <button onClick={ this.toggleEdit }>new game</button>
     </div>
   );
 }
}

export default Alphabet;
