
const Paymentcard = () => {
    return (
        <div style={{border: '4px solid black'}}>
      <div class="mt-4 mx-4">
        <div class="text-center">
          {" "}
          <h5>Credit card</h5>{" "}
        </div>
        <div class="form mt-3">
          <div class="inputbox">
            <input
              type="text"
              name="name"
              class="form-control"
              required="required"
            />
            <h5>Cardholder Name</h5>{" "}
          </div>
          <div class="inputbox">
            <input
              type="text"
              name="name"
              min="1"
              max="999"
              class="form-control"
              required="required"
            />
            <h5>Card Number</h5> <i class="fa fa-eye"></i>{" "}
          </div>
          <div class="d-flex flex-row">
            <div class="inputbox">
              <input
                type="text"
                name="name"
                min="1"
                max="999"
                class="form-control"
                required="required"
              />
              <h5>Expiration Date</h5>{" "}
            </div>
            <div class="inputbox">
              <input
                type="text"
                name="name"
                min="1"
                max="999"
                class="form-control"
                required="required"
              />
              <h5>CVV</h5>{" "}
            </div>
          </div>
          <div class="px-5 pay">
            <button class="btn btn-success btn-block">Add card</button>
          </div>
        </div>
      </div>
      </div>
    );
}

export default Paymentcard;