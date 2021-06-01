import React from 'react';

import '../styles/EventsPage.css';


class EventsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
    };

  }

  componentDidMount(view) {
    let fetchURL = "https://api.airtable.com/v0/appE6vA4soemWwtjZ/events?api_key=keyPsXRD4f15xzcMD";
    if (view === "pastEvents") {
      fetchURL = "https://api.airtable.com/v0/appE6vA4soemWwtjZ/pastevents?api_key=keyPsXRD4f15xzcMD";
    }
    fetch(fetchURL)
    .then((resp) => resp.json())
    .then(data => {
      this.setState({ events: data.records });
    }).catch(err => {
    });
  }

  render() {
    this.state.events.sort((first, second) => (first.fields.orderonpage > second.fields.orderonpage)? 1:-1)
    return (
      <div>
        <div className="tab-bar">
          <button className="tab button1" onClick={e => {this.componentDidMount("currentEvents");}}>Current/Upcoming Events</button>
          <button className="tab button2" onClick={e => {this.componentDidMount("pastEvents");}}>Past Events</button>
          <hr className="button1 tabline" />
        </div>
        <div className="card-deck">
          {this.state.events.map(event => <EventCard {...event.fields} /> )}
        </div>
      </div>
    );

  }

}

export default EventsPage;

const EventCard = ({orderonpage, name, date, description, buttontext, buttonlink, picture }) => (
  <div className="card">
    <div className="card-picture-flex">
      <img className ="card-picture" src={picture[0].url}></img>
    </div>
    <div className="card-alltext">
      <div className="card-name">{name}</div>
      <hr className="cardline"/>
      <div className="card-date">{date}</div>
      <div className="card-description">{description}</div>
      <a href={buttonlink} className="card-button">{buttontext}</a>
    </div>
  </div>
);