import * as React from "react";
import * as SuperTokens from "supertokens-auth-react";
import * as ThirdPartyEmailPassword from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import { Github, Google, Facebook, Apple } from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from "supertokens-auth-react/recipe/session";
import { environment } from "src/environments/environment";



SuperTokens.init({
    appInfo: {
        appName: environment.appName,
        apiDomain: environment.apiDomain,
        websiteDomain: environment.websiteDomain,
        apiBasePath: environment.apiBasePath,
        // websiteBasePath: environment.websiteBasePath
    },
    recipeList: [
        ThirdPartyEmailPassword.init({
            signInAndUpFeature: {
                providers: [
                    Github.init(),
                    Google.init(),
                    Facebook.init(),
                    Apple.init(),
                ],
            },
            onHandleEvent: async (context) => {
                if (context.action === "SESSION_ALREADY_EXISTS") {
                    // TODO:
                } else {
                    if (context.action === "SUCCESS") {
                        if (context.isNewUser) {
                            // TODO: Sign up
                            console.log("Sign up");
                        } else {
                            // TODO: Sign in
                            console.log("Sign in");
                        }
                    }
                }
            }
        }),
        Session.init(),
    ],
});

class SuperTokensReactComponent extends React.Component {
     render() {
        if (SuperTokens.canHandleRoute()) {
            return SuperTokens.getRoutingComponent();
        }
        return "Route not found";
    }
}

export default SuperTokensReactComponent;