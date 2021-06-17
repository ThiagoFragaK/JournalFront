import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class CreateEntry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entryTitle: '',
            entryDescr: '',
            entryDate: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        axios.post('https://localhost:44396/api/Entries', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            });
        <Redirect to="/Entries" />
    }

    render() {
        const { entryTitle, entryDescr, entryDate } = this.state;

        return (
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-md-5">
                        <div class="card shadow-lg border-secondary rounded-lg mt-5">
                            <div class="card-header"><h3 class="text-center font-weight-light my-4">Nova Notícia</h3></div>
                            <div class="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="entryAdd form-group">
                                        <label class="col-form-label mt-4" htmlFor="entryTitle">Title</label>
                                        <input
                                            class="form-control"
                                            type="text"
                                            name="entryTitle"
                                            placeholder="Título da Notícia"
                                            minLength="3"
                                            maxLength="100"
                                            required
                                            value={entryTitle}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="entryAdd form-group">
                                        <label class="col-form-label mt-4" htmlFor="entryDescr">Notícia</label>
                                        <textarea
                                            class="form-control"
                                            type="text"
                                            name="entryDescr"
                                            placeholder="Notícia"
                                            minLength="3"
                                            maxLength="200"
                                            required
                                            value={entryDescr}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="entryAdd form-group">
                                        <label class="col-form-label mt-4" htmlFor="entryDate">Data da Notícia</label>
                                        <input
                                            class="form-control"
                                            type="date"
                                            name="entryDate"
                                            placeholder="Data da Notícia"
                                            required
                                            value={entryDate}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <br />
                                    <button class="btn btn-outline-primary" type="submit">Cadastrar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEntry;

