import * as React from 'react';
import { Component } from 'react';

class ListFilesComponent extends React.Component {
    [x: string]: any;

    state = {
        files: [
            {
                name: 'file1.txt',
                size: '1.2 MB',
                type: 'text/plain'
            },
            {
                name: 'file2.txt',
                size: '1.2 MB',
                type: 'text/plain'
            }
        ]
    }

    constructor() {
        super();
        this.state = { files: [] };
    }

    componentDidMount() {
        fetchFiles(files => this.setState({ files }));
    }

    render() {
        return (
            <div>
                <h1>List of files</h1>
                <ul>
                    {this.state.files.map(file =>
                        <li key={file.name}>
                            <span>{file.name}</span>
                            <span>{file.size}</span>
                            <span>{file.type}</span>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

function fetchFiles(arg0: (files: any) => any) {
    throw new Error('Function not implemented.');
}
