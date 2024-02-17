import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css', './../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class ServersComponent {    
    serverAdded: boolean = false;
    serverName: string="";
    serverNames:string[] = [];

    addServer() {
      this.serverAdded = true;
      this.serverNames.push(this.serverName);
      console.log(this.serverNames);
    }

    addButtonCSSStyles() {
      let CssStyles = {        
          'color':'red',
          'font-weight': 'bold',
          'font-size.px': 20
      };
      return CssStyles;
    }
}