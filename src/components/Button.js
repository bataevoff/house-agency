import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
  background-color: ${({ primary }) => (primary ? '#000d1a' : 'CD853F')};
`