import React, { createContext, useState, useEffect } from 'react'


// export const EventContext = createContext()

// const EventContextProvider = (props) => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     ApiClient.getEvents()
//       .then(res => {
//         console.log(res.data);
//         setEvents(res.data.sort((a,b) => {
//           return new Date(b.date).getTime() - new Date(a.date).getTime()
//         }));
//       });
//   }, []);

//   const postEvent = (event) => {
//     ApiClient.postEvents(event)
//       .then(res => {
//         console.log(res.data);
//         setEvents((prevEvents) => {
//           return [...prevEvents, res.data];
//         });
//       });
//   }

//   return (
//     <EventContext.Provider value={{ events, postEvent }}>
//       {props.children}
//     </EventContext.Provider>
//   );
// };

// export default EventContextProvider;