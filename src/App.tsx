import React from 'react';
import './App.css';
import { RichTextEditorComponent, Toolbar, Link, Table, QuickToolbar,
  Image, HtmlEditor, Inject } from '@syncfusion/ej2-react-richtexteditor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { text } from 'stream/consumers';

class App extends React.Component {

  public customToolbarSettings : object = {
    items: ['Bold', 'Italic', 'Undo', 'Redo', 'CreateTable', 'CreateLink','OrderedList','UnorderedList','InsertCode']
  }; 
  rteObject ! : RichTextEditorComponent;
  public rteValue ! : string;
  
  render() {
    return (
      <div >  
        <div style={{width:'70%',marginLeft:'15%',marginRight:'15%',marginTop:'15%',boxShadow:'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px'}}  >
          
        
        <RichTextEditorComponent ref={(richtexteditor : RichTextEditorComponent)=> {this.rteObject=richtexteditor}}
        toolbarSettings={this.customToolbarSettings}   >
          
         <p>Start Writing....</p>
      
        <Inject services = {[Toolbar, Link, HtmlEditor, Table]}></Inject>
        </RichTextEditorComponent>
        </div> 
      </div>
    );
  }
}
   

export default App;



 
 
