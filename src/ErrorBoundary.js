import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // add the error log into Senrty, Azure Monitor, Relic
    console.log("ErrorBoundary caught an error", error, info);
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          This listinng has an error <Link to="/">Click here</Link> to go back
          to home page or wait for five seconds.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
