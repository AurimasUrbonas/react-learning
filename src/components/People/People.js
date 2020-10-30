import React, { PureComponent } from 'react';

import Person from './Person/Person';

class People extends PureComponent {
   // static getDerivedStateFromProps(props, state) {
   //    console.log('[People.js] getDerivedStateFromProps');
   //    return state;
   // }

   // shouldComponentUpdate(nextProps, nextState) {
   //    console.log('[People.js] shouldComponentUpdate');
   //    if(
   //       nextProps.people !== this.props.people ||
   //       nextProps.changed !== this.props.changed ||
   //       nextProps.clicked !== this.props.clicked
   //    ) {
   //       return true;
   //    } else {
   //       return false;
   //    }
   // }

   getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('[People.js] getSnapshotBeforeUpdate');
      return { message: 'Snapshot' };
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('[People.js] componentDidUpdate');
      console.log(snapshot);
   }

   componentWillUnmount() {
      console.log('[People.js] componentWillUnmount');
   }

   render () {
      console.log('[People.js] rendering...');
      return (this.props.people.map((person, index) => {
         return (
            <Person
               click={() => this.props.clicked(index)}
               name={person.name}
               age={person.age}
               key={person.id}
               changed={(event) => this.props.changed(event, person.id)}
            />
         );
      }));
   }
};

export default People;