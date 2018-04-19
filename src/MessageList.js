import React from 'react';
import styled from 'styled-components';
import MessageListItem from './MessageListItem';

const Ul = styled.ul`
  height: 100vh;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Li = styled.li`
  display: flex;
  align-items: center;

  &:not(:first-child) {
    border-top: 1px solid #f1f1f1;
  }
`;

const MessageList = ({ messages, ...rest }) => (
  <Ul>
    {messages.map((message) => (
      <Li
        key={message}
        style={{
          height: `${100 / messages.length}vh`,
          fontSize: `${messages.length * 0.5}vh`,
        }}
      >
        <MessageListItem
          message={message}
          {...rest}
        />
      </Li>
    ))}
  </Ul>
);

export default MessageList;
