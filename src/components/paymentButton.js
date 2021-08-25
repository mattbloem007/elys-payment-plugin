function PaymentButton(props) {
    return (
        <button style={{
            display: 'block',
            backgroundColor: '#ffffff',
            border: '1px solid #ffffff',
            borderRadius: 20,
            padding: 10,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 50,
            fontSize: 18,
            fontWeight: 500,
            color: '#ed6f1b',
            width: 190
        }} onClick={props.connect}>Pay with ELYS</button>
    );
  }

  export default PaymentButton;
