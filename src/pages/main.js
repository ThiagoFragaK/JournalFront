import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
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
            <div class="container-fluid">
                <br />
                <h1>Feed de Notícias</h1>
                <hr />
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card mb-4">
                            {
                                this.state.entries.map(
                                    entry =>
                                        <div className="entryList col-md-4" key={entry.entryId}>
                                            <div class="card-header">
                                                <h3 class="text-center font-weight my-4">{entry.entryTitle}</h3>
                                            </div>
                                            <div class="card-body">
                                                <br />
                                                <h5>{entry.entryDescr}</h5>
                                                <h5>{entry.entryDate}</h5>
                                            </div>
                                        </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;