import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    console.log("Erreur détectée :", error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2 style={{ color: "red" }}>Une erreur est survenue dans ce composant.</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
