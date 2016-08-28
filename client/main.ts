import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { ShoutComponent } from './shout.component';
bootstrap(ShoutComponent, [disableDeprecatedForms(), provideForms(
)]);
