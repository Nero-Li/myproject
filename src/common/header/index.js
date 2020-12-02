import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { getHeaderSearchFocusAction,getHeaderSearchBlurAction } from '../../store/actionCreators'

class Header extends Component {



    render() {
        const { focused ,handleInputFocus,handleInputBlur} = this.props;
        return (
            <HeaderWrapper>
                <Logo href='/' />
                <Nav >
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">发现</NavItem>
                    <NavItem className="left">等你来答</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            timeout={200}
                            in={focused}
                            classNames='slide'
                        >
                            <NavSearch className={focused ? 'focusd' : ''}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur} />
                        </CSSTransition>
                        <span className={focused ? 'focusd iconfont' : 'iconfont'}>&#xebd3;</span>
                    </SearchWrapper>
                    <NavItem className="right">登录<span className="iconfont">&#xe70a;</span></NavItem>
                    <NavItem className="right">注册<span className="iconfont">&#xe71c;</span></NavItem>
                    <Addition>
                        <Button>提问<span className="iconfont">&nbsp;&#xe7bf;</span></Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        );
    }

    handleInputFocus = () => {
        this.setState({
            focused: true
        })
    }
    handleInputBlur = () => {
        this.setState({
            focused: false
        })
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.focused
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus: () => {
            dispatch(getHeaderSearchFocusAction())
        },
        handleInputBlur:()=>{
            dispatch(getHeaderSearchBlurAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);