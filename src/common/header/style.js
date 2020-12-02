import styled from 'styled-components';
import logo from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    height:56px;
    border-bottom : 1px solid #e8e8e8 
    
`;
/* 
export const Logo = styled.a.attrs({
    href: '/'
})`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width: 110px;
    height: 54px;
    background:url(${logo});
    background-size:contain;
` */


export const Logo = styled.a`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width: 110px;
    height: 54px;
    /* background:url('../../static/logo.svg'); */
    background:url(${logo});
    background-size:contain;
`;

export const Nav = styled.div`
    width: 1032px;
    height : 100%;
    margin: 0 auto;
    color: #8590a6;
    /* background:gray; */
`;

export const NavItem = styled.div`
    &.left{
        float:left;
    }
    &.right{
        float:right;
    }
    &.active{
        color:#121212;
        background-color: #a87e52;
    }
    line-height: 56px;
    padding: 0 15px;
`;

export const NavSearch = styled.input.attrs({
    placeholder: '查询'
})`
    width: 192px;
    height: 34px;
    border :1px solid #ebebeb;
    background: #f6f6f6;
    margin-top: 11px ;
    /* padding: 0 20px; */
    padding: 0 25px 0 10px;
    /* border-radius: 17px; */
    box-sizing: border-box;
    &::placeholder{
        /* color: #eee */
        color: #999;
    }
    &.focusd{
        width:300px
    }
    &.slide-enter{
        transition: all .2s ease-out
    }
    &.slide-enter-active{
        width: 300px;
        background: red;
    }
    &.slide-exit{
        transition: all .2s ease-out
    }
    &.slide-exit-active{
        width:192px
    }
`;

export const Addition = styled.div`
    position: absolute;
    right:0;
    top:0;
    height:56px;
`;

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #a87e52;
    margin-right: 20px;
    padding: 0 20px;
    color: #a87e52;
    font-weight: bold;
`;

export const SearchWrapper = styled.div`
    
    position: relative;
    float: left;
    /* background: red; */
    .iconfont{
        position: absolute;
        right: 0px;
        bottom: 0px;
        /* background-color: red; */
        width: 34px;
        line-height: 34px;
        text-align: center;
        /* border-radius: 17px; */
        &.focusd{
           color : #a87e52;
        }
    }
`