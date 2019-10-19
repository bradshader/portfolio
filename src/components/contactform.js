import React from "react";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (

        <div className="myform">
            <form
                onSubmit={this.submitForm}
                action="https://formspree.io/xyrvjzwm"
                method="POST"
            >


                {/* <!-- add your custom form HTML here --> */}

                <label>Name:</label>
                <input type="text" name="name" placeholder="Your name" />

                <label>Email:</label>
                <input type="email" name="email" placeholder="Your email" />

                <label>Message:</label>
                <textarea rows="3" name="message" placeholder="Message" />

                <input type="text" name="_gotcha" style={{display:"none"}}/>

                {status === "ERROR" && <p>Ooops! There was an error.</p>}

                {status === "SUCCESS" ? <p>Thanks! I'll get back to you soon.</p> : <button>Submit</button>}
                

                


            </form>
        </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}