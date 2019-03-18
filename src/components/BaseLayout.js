import React from 'react';
import { Container } from 'react-bootstrap'
import NavBar from './NavBar'

class BaseLayout extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <NavBar></NavBar>
                </div>
                <Container>

                    {this.props.children}

                </Container>
            </div>
        );
    }
}

export default BaseLayout;
