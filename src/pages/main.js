import React, { Component } from 'react'
import Web3 from "web3";
import PaymentButton from '../components/paymentButton'

import detectEthereumProvider from '@metamask/detect-provider'

class Main extends Component {

    state = {
        loading: true,
        hasMetamask: false,
        isConnected: false
    }

    checkMetamask = async () => {
        let provider = await detectEthereumProvider()
        if (provider) {
            return window.ethereum.isMetaMask
        }
        return false
    }

    componentDidMount = async () => {
        let hasMetamask = await this.checkMetamask()
        if(hasMetamask){
            window.web3 = new Web3(window.ethereum);
            if(!window.ethereum.isConnected){
                this.setState({loading: false,hasMetamask: true, isConnected: false})
                return
            }
            let accounts = await window.web3.eth.getAccounts();
            let connected = accounts.length>0;
            this.setState({loading: false,hasMetamask: true, isConnected: connected})
        }
        else{
            this.setState({loading: false})
        }
    }
    connect = async () => {
        //window.ethereum.enable();
        try{
            let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
            let connected = accounts.length>0 && window.ethereum.isConnected
            if(connected){
                this.setState({isConnected: true})
            }
        }
        catch(e){
            console.log(e)
        }
    }
    render = () => {
        let body = null
        let { domElement } = this.props
        const title = domElement.getAttribute("product-title")
        const elysAmount = domElement.getAttribute("product-amount")
            if(this.state.hasMetamask && !this.state.isConnected){
                body = <PaymentButton connect={this.connect}/>
            } else if (!this.state.hasMetamask){
                body = <div>no metamask</div>
            } else {
                body=(
                  <PaymentButton connect={this.connect}/>
                )
            }


        return (
            <div>
                <h3 style={{color: '#ed6f1b'}}>Title of Product: {title}</h3>
                <p style={{color: '#ed6f1b'}}> ELYS (Price): {elysAmount}</p>
                {body}
            </div>
        )
    }
}

export default Main
