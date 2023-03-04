import styled from 'styled-components'

import { BodyLarge } from '../typography'

export const ListContainer = styled.ul`
    padding: 0;
`

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-bottom: 24px;
`

export const ListItemDescription = styled(BodyLarge)`
    margin: 8px 0;
`