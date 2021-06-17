import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import './main.css';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entries: []
        }
    }

    componentDidMount() {
        axios.get('https://localhost:44396/api/Entries')
            .then(r => {
                console.log(r);
                this.setState({ entries: r.data });
            })
            .catch(e => {
                console.log(e)
            });
    }

    render() {
        const { entries } = this.state;

        return (
            <div class="row col-12 justify-content-center">
                {
                    this.state.entries.map(
                        entry =>
                            <div className="entryList col-3 mf-3 my-3" key={entry.entryId}>
                                <div class="card-header">
                                    <h3 class="text-center font-weight my-4">{entry.entryTitle}</h3>
                                </div>
                                <div class="card-body">
                                    <br />
                                    <h5>{entry.entryDescr}</h5>
                                    <h5>{moment(entry.entryDate).format("L")}</h5>
                                </div>
                            </div>
                    )
                }
            </div>
        )
    }
}

export default Main;
