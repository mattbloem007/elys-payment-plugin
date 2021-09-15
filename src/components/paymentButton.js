import elyseos from '../Elyseos-logo-32x32.png'
function PaymentButton(props) {
  if (props.isConnected) {
    return (
        <button style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#EC7019',
            border: '1px solid #ffffff',
            borderRadius: 20,
            padding: 10,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 50,
            fontSize: 18,
            fontWeight: 500,
            color: '#ffffff',
            width: 190
        }} onClick={props.pay}>Pay with ELYS <img src={elyseos} style={{ paddingLeft: '10px'}}/></button>
      )
  }
  else {
    return (
        <button style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#EC7019',
            border: '1px solid #ffffff',
            borderRadius: 20,
            padding: 10,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 50,
            fontSize: 18,
            fontWeight: 500,
            color: '#ffffff',
            width: 190
        }} onClick={props.connect}>Connect Wallet <img src={elyseos} style={{ paddingLeft: '10px'}}/></button>
    );
  }
}
  export default PaymentButton;
