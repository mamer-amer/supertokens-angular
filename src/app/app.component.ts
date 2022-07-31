import { Component } from "@angular/core";
import { environment } from "src/environments/environment";

import * as SuperTokens from "supertokens-web-js";
import * as Session from "supertokens-web-js/recipe/session";

SuperTokens.init({
    appInfo: {
        appName: environment.appName,
        apiDomain: environment.apiDomain,
    },
    recipeList: [Session.init()],
});

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    title = "taqwa-invest";
    sessionPreset = false;

    constructor(){
        
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.doesSessionExist();
    }

    async doesSessionExist() {
        if (await Session.doesSessionExist()) {
              // user is logged in
              console.log("Session exists");
                this.sessionPreset = true;
        } else {
              // user has not logged in yet
                console.log("Session does not exist");
                this.sessionPreset = false;
        }
  }
}

