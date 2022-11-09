import React, { Component } from "react";
import ShowPayments from "../childs/Transactions/ShowPayments";
import "./PaymentsContainer.css"
import { Container } from "react-bootstrap";

class PaymentsContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <>
            <section className="payments">
                <Container>
                    <br></br>
                    <br></br>
                    <br></br>
                </Container>
                <Container>
                    <div className="p-4">
                        <ShowPayments transactionId={this.props.transactionId}/>
                    </div>
                </Container>
            </section>
        </>;
    }
}

export default PaymentsContainer;