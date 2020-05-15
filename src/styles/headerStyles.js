import styled from "styled-components"
import {motion} from "framer-motion"

export const HeaderNav = styled(motion.div)`
    height:0px;
    width:100%;
    position:absolute;
    top:72px;
    right:0;
    left:0;
    z-index:99;
`
export const Logo = styled.div`
    a {
        font-size:1.8rem;
        font-weight:400;
        color:${props => props.theme.text};
    }
    span {
        height:1rem;
        width:1rem;
        background-color:${props => props.theme.red};
        margin:0 4px;
        border-radius:100%;
        display:inline-block;
        position:relative;
        bottom:2px;
    }
`
export const Menu = styled.div`
    button {
        transform-origin:center;
        border:none;
        outline:none;
        padding:20px;
        background:none;
        position:relative;
        &:hover {
            &:before {
                opacity:1;
            }
        }
        &:before {
            content:'WORK';
            display:block;
            opacity:0;
            color:${props => props.theme.text};
            font-family:inherit;
            font-size: inherit;
            font-weight:500;
            position:absolute;
            left:-40px;
            top:50%;
            transform:translateY(-50%);
        }
        span {
            width:36px;
            height:8px;
            display:block;
            background-color:${props => props.theme.text};
            margin:8px;
        }
    }
`