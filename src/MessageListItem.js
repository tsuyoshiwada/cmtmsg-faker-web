import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  opacity: ${p => p.loading ? '0.2' : '1'};
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  padding: 0.5em 1em;
  border: 0;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
`;

export default class MessageListItem extends React.PureComponent {
  ref = React.createRef();

  handleInputClick = () => {
    this.ref.current.select();
  };

  render() {
    const { message, loading } = this.props;

    return (
      <Wrapper loading={loading}>
        <Input
          readOnly
          disabled={loading}
          innerRef={this.ref}
          value={message}
          onClick={this.handleInputClick}
        />
      </Wrapper>
    );
  }
}
