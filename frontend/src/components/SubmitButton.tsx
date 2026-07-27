import styled from '@emotion/styled';

const SubmitButton = styled.button`
  margin-top: 20px;
  align-self: flex-start;
  background: var(--color-accent);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: var(--color-accent-hover);
  }
`;

export default SubmitButton;
