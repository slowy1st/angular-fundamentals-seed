// there's different ways to bootstrap an app: on the server, on the client, or precompile it
// -> platformBrowserDynamic runs on the client
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import {AppModule} from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);
