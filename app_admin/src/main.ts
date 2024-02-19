import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  
declare module "rxjs" {
    interface Observable<T> {
        /**
         * Extension method. Applies 'lastValueFrom' to Observable<T>.
         */
        toPromise(): Promise<T | undefined>;
    }
}




