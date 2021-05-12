import styled from 'styled-components'

export const SelectWrapper = styled.div`
position: relative;
display-inline: block;
svg {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.3s;
    &.is-active{
        transform: translate(-50%) rotate(180deq);
    }
`

export const Select = styled.select`
border: none;
outline: none;
appearance: none;
color: blue;
`