

import { Shouts } from '../../both/collections/shouts.collection';



export function loadShouts() {

  if (Shouts.find().count() === 0) {

    const shouts = [

      {text: 'Dubstep-Free Zone',
      location: 'Palo Alto',
      time: 'now'

      }
    ];



    shouts.forEach((shout) => Shouts.insert(shout));

  }

}
