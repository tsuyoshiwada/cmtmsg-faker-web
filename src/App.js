import React from 'react';
import Spinner from './Spinner';
import MessageList from './MessageList';

const API_URL = 'https://cmtmsg-faker.herokuapp.com';

export default class App extends React.PureComponent {
  state = {
    loading: true,
    messages: [],
  };

  componentDidMount() {
    (async () => {
      await this.fetchDataIfNeeded(true);
      window.addEventListener('keydown', this.handleKeyDown, false);
    })();
  }

  async fetchDataIfNeeded(force = false) {
    if (this.state.loading && !force) {
      return;
    }

    this.setState({ loading: true });

    const res = await fetch(`${API_URL}?count=10`);
    const messages = await res.json();

    this.setState({
      loading: false,
      messages,
    });
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 32) {
      this.fetchDataIfNeeded();
    }
  };

  render() {
    const { loading, messages } = this.state;

    return (
      <div>
        <MessageList
          loading={loading}
          messages={messages}
        />

        {loading && <Spinner />}
      </div>
    );
  }
}
